import React, { createContext, useReducer, useMemo } from 'react'
import PropTypes from 'prop-types'

import boardReducer from './reducers/boardReducer'

export const Context = createContext(null)

function Store({ children }) {
  const initialState = { boards: [] }
  const [state, dispatch] = useReducer(boardReducer, initialState)
  const providerValue = useMemo(() => ({ state, dispatch }), [state, dispatch])

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
