import React, { useState } from 'react'
import Grudges from './Grudges'
import NewGrudge from './NewGrudge'

// TODO: 使用 useReducer 重构
// TODO: memo & useCallback 优化性能
import initialState from './initialState'

import id from 'uuid/dist/v4'


const Application = () => {
  const [grudges, setGrudges] = useState(initialState)

  const addGrudge = grudge => {
    grudge.id = id();
    grudge.forgiven = false;
    setGrudges([grudge, ...grudges])
  }

  const toggleForgiveness = id => {
    setGrudges(
      grudges.map(grudge => {
        if (grudge.id !== id) return grudge;
        return { ...grudge, forgiven: !grudge.forgiven }
      })
    )
  }

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
}

export default Application;