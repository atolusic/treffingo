import React, { createContext, useReducer, useMemo } from 'react'
import PropTypes from 'prop-types'

import boardReducer from './reducers/boardReducer'

export const Context = createContext(null)

function Store({ children }) {
  const initialState = { boards: [] }
  const [getState, dispatch] = useReducer(boardReducer, initialState)
  const providerValue = useMemo(() => ({ getState, dispatch }), [getState, dispatch])

  return (
    <Context.Provider value={providerValue}>
      {children}
    </Context.Provider>
  )
}

Store.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default Store
