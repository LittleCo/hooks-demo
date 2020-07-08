import React from 'react'
import Grudges from './Grudges'
import NewGrudge from './NewGrudge'


// TODO: 使用 useReducer 重构
// TODO: memo & useCallback 优化性能
// TODO: refoctor with useContext

const Application = () => {
  
  return (
      <div className="Application">
        <NewGrudge />
        <Grudges />
      </div>
  );
}

export default Application;