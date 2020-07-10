import React, { createContext, useReducer, useCallback } from 'react'

import initialState from './initialState'
import id from 'uuid/dist/v4'

export const GrudgeContext = createContext();


const GRUDGE_ADD = 'GRUDGE_ADD'
const GRUDGE_FORGIVE = 'GRUDGE_FORGIVE'

const reducer = (state, action) => {
  switch(action.type) {
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



export const GrudgeContextProvider = ({children}) => { 
    const [grudges, dispatch] = useReducer(reducer, initialState)

    const addGrudge = useCallback(({person, reason}) => {
        dispatch({
          type: GRUDGE_ADD,
          payload: {
            person,
            reason,
            id: id(),
            forgiven: false,
          }
        })
      }, [dispatch])
    
      const toggleForgiveness = useCallback((id) => {
        dispatch({type: GRUDGE_FORGIVE, payload: id })
      }, [dispatch])

    const value = { grudges, addGrudge, toggleForgiveness }
    return (
        <GrudgeContext.Provider value={value}>
         { children }
        </GrudgeContext.Provider>
    )
}