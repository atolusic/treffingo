import React, { createContext, useReducer, useMemo } from 'react'
import PropTypes from 'prop-types'

import boardReducer from './reducers/boardReducer'
import layoutReducer from './reducers/layoutReducer'

import { getTheme } from './actions/layout'

export const Context = createContext(null)

function Store({ children }) {
  const initialState = {
    boards: [],
    selectedBoard: null,
    loading: false,
  }

  const layoutInitialState = { theme: getTheme() }

  const [state, dispatch] = useReducer(boardReducer, initialState)
  const [layoutState, layoutDispatch] = useReducer(layoutReducer, layoutInitialState)
  const board = useMemo(() => ({ state, dispatch }), [state, dispatch])
  const layout = useMemo(() => ({ layoutState, layoutDispatch }), [layoutState, layoutDispatch])

  return (
    <Context.Provider value={{ ...layout, ...board }}>
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
