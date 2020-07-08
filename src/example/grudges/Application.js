import React, { useCallback, useReducer } from 'react'
import Grudges from './Grudges'
import NewGrudge from './NewGrudge'

// TODO: 使用 useReducer 重构
// TODO: memo & useCallback 优化性能
import initialState from './initialState'

import id from 'uuid/dist/v4'

const GRUDGE_ADD = 'GRUDGE_ADD'
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE'

const reducer = (state, action) => {
  switch (action.type) {
    case GRUDGE_ADD:
      return [action.payload, ...state]
    case GRUDGE_FORGIVE:
      return state.map(grudge => {
        if (grudge.id !== action.payload.id) return grudge;
        return { ...grudge, forgiven: !grudge.forgiven }
      })
    default:
      return state;

  }
}


const Application = () => {
  const [grudges, dispatch] = useReducer(reducer, initialState)

  const addGrudge = useCallback(({ person, reason }) => {
    dispatch({
      type: GRUDGE_ADD,
      payload: {
        person,
        reason,
        forgiven: false,
        id: id()
      },
    })
  }, [dispatch])

  const toggleForgiveness = useCallback(id => {
    dispatch({
      type: GRUDGE_FORGIVE,
      payload: { id }
    })
  }, [dispatch])

  return (
    <div className="Application">
      <NewGrudge onSubmit={addGrudge} />
      <Grudges grudges={grudges} onForgive={toggleForgiveness} />
    </div>
  );
}

export default Application;