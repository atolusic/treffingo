import shortid from 'shortid'

import {
  ls,
  add,
  stringify,
  parse,
  get,
} from '../utils/localStorage'
import {
  ADD_BOARD,
  GET_BOARDS,
  GET_BOARD,
  START_LOADING,
} from '../constants/actionTypes'

const boardsLs = ls('boards')

export const addBoard = (name) => {
  const storedBoards = parse(boardsLs(get)())
  const addToLocalStorage = boardsLs(add)

  const payload = {
    id: shortid.generate(),
    name,
  }

  addToLocalStorage(!storedBoards ? stringify([payload]) : stringify([...storedBoards, payload]))

  return {
    type: ADD_BOARD,
    payload,
  }
}

export const getBoards = async () => {
  const boardsJson = await boardsLs(get)()
  const storedBoards = parse(boardsJson) || []

  return {
    type: GET_BOARDS,
    payload: storedBoards,
  }
}

export const startLoading = () => ({ type: START_LOADING })

export const getBoardById = async (boardId, dispatch) => {
  dispatch(startLoading())
  const boardsJson = await boardsLs(get)()
  const storedBoards = parse(boardsJson)
  const board = storedBoards.find(b => b.id === boardId)

  return {
    type: GET_BOARD,
    payload: board,
  }
}
