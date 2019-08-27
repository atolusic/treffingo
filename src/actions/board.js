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
const addToLocalStorage = boardsLs(add, 500)

export const startLoading = () => ({ type: START_LOADING })

export const addBoard = async (name, dispatch) => {
  dispatch(startLoading())
  const jsonBoards = await boardsLs(get, 300)()
  const storedBoards = parse(jsonBoards)
  const payload = {
    id: shortid.generate(),
    name,
  }

  await addToLocalStorage(stringify([...storedBoards, payload]))

  return {
    type: ADD_BOARD,
    payload,
  }
}

export const getBoards = async () => {
  const boardsJson = await boardsLs(get, 1000)()
  const storedBoards = parse(boardsJson) || []

  if (!boardsJson) {
    addToLocalStorage(stringify([]))
  }

  return {
    type: GET_BOARDS,
    payload: storedBoards,
  }
}

export const getBoardById = async (boardId, dispatch) => {
  dispatch(startLoading())
  const boardsJson = await boardsLs(get, 1000)()
  const storedBoards = parse(boardsJson)
  const board = storedBoards.find(b => b.id === boardId)

  return {
    type: GET_BOARD,
    payload: board,
  }
}
