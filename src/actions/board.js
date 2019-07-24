import shortid from 'shortid'

import {
  ls,
  add,
  stringify,
  parse,
  get,
} from '../utils/localStorage'
import { ADD_BOARD, GET_BOARDS } from '../constants/actionTypes'

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

export const getBoards = () => {
  const storedBoards = parse(boardsLs(get)()) || []

  return {
    type: GET_BOARDS,
    payload: storedBoards,
  }
}
