import shortid from 'shortid'

import {
  ls,
  lsSync,
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
  BOARD_NOT_FOUND,
  ADD_BOARD_LIST,
  ADD_LIST_ITEM,
  DRAG_LIST_ITEM,
} from '../constants/actionTypes'

const boardsLsSync = lsSync('boards')
const addSync = boardsLsSync(add)
const addSyncWithStringify = data => addSync(stringify(data))
const getSync = boardsLsSync(get)
const getParsedBoardsFromLsSync = () => parse(getSync())

const boardsLs = ls('boards')
const addToLocalStorage = (delay = 300) => boardsLs(add, delay)
const addToLsWithStringify = (data, delay = 300) => addToLocalStorage(delay)(stringify(data))
const getBoardsFromLs = async (delay = 300) => boardsLs(get, delay)()
const getParsedBoardsFromLs = async (delay = 300) => {
  const boards = await getBoardsFromLs(delay)

  return parse(boards)
}
const getBoardFromLsById = async (id, delay = 300) => {
  const storedBoards = parse(await getBoardsFromLs(delay))

  return storedBoards.find(b => b.id === id)
}

export const startLoading = () => ({ type: START_LOADING })

export const addBoard = async (name, dispatch) => {
  dispatch(startLoading())
  const storedBoards = await getParsedBoardsFromLs()
  const payload = {
    id: shortid.generate(),
    name,
    lists: [],
  }

  await addToLsWithStringify([...storedBoards, payload])

  return {
    type: ADD_BOARD,
    payload,
  }
}

export const getBoards = async () => {
  const boardsJson = await getBoardsFromLs(1000)
  const storedBoards = parse(boardsJson) || []

  if (!boardsJson) {
    addToLsWithStringify([])
  }

  return {
    type: GET_BOARDS,
    payload: storedBoards,
  }
}

export const getBoardById = async (boardId, dispatch) => {
  dispatch(startLoading())
  const board = await getBoardFromLsById(boardId, 0)

  if (!board) {
    return {
      type: BOARD_NOT_FOUND,
    }
  }

  return {
    type: GET_BOARD,
    payload: board,
  }
}

export const addBoardList = async (listName, boardId) => {
  const boards = await getParsedBoardsFromLs()
  const selectedBoard = {}
  const list = {
    id: shortid.generate(),
    boardId,
    name: listName,
    createdAt: new Date(), // For now
    items: [],
  }

  const payload = boards.map((board) => {
    if (board.id === boardId) {
      board.lists.push(list)
      Object.assign(selectedBoard, board)
    }
    return board
  })

  await addToLsWithStringify(payload)

  return {
    type: ADD_BOARD_LIST,
    payload,
    selectedBoard,
  }
}

export const getListById = (boards, boardListId) => {
  let index = 0
  const listToSearch = boards[index].lists

  const loop = (list, listId) => {
    for (let i = 0; i < list.length; i += 1) {
      if (list[i].id === listId) {
        return list[i]
      }
    }

    return loop(boards[++index].lists, listId)
  }

  return loop(listToSearch, boardListId)
}

export const addListItem = async (task, listId) => {
  const boards = await getParsedBoardsFromLs()
  const listItem = {
    id: shortid.generate(),
    listId,
    task,
  }

  const list = getListById(boards, listId)
  const board = boards.find(b => b.id === list.boardId)

  const updatedBoardLists = board.lists.map((l) => {
    if (l.id === listId) {
      return {
        ...l,
        items: [...list.items, listItem],
      }
    }

    return l
  })

  board.lists = updatedBoardLists

  const payload = boards.map((b) => {
    if (b.id === board.id) {
      return board
    }

    return b
  })

  await addToLsWithStringify(payload)

  return {
    type: ADD_LIST_ITEM,
    payload,
    selectedBoard: board,
  }
}

export const dragListItem = (listId, item) => {
  const boards = getParsedBoardsFromLsSync()
  const list = getListById(boards, listId)
  const board = boards.find(b => b.id === list.boardId)

  if (listId === item.listId) {
    const index = list.items.findIndex(i => i.id === item.id)
    const data = list.items

    const moveItem = (from, to) => {
      const f = data.splice(from, 1)[0]

      data.splice(to, 0, f)
    }

    moveItem(index, data.length)

    board.lists = board.lists.map((l) => {
      if (l.id === listId) {
        return {
          ...l,
          items: list.items,
        }
      }

      return l
    })

    const payload = boards.map((b) => {
      if (b.id === board.id) {
        return board
      }

      return b
    })

    return {
      type: DRAG_LIST_ITEM,
      payload,
      selectedBoard: board,
    }
  }

  list.items.push({
    ...item,
    listId,
  })

  const filteredListItems = getListById(boards, item.listId)
    .items
    .filter(i => i.id !== item.id)

  const updatedBoardLists = board.lists.map((l) => {
    if (l.id === listId) {
      return {
        ...l,
        items: list.items,
      }
    }

    if (l.id === item.listId) {
      return {
        ...l,
        items: filteredListItems,
      }
    }

    return l
  })

  board.lists = updatedBoardLists

  const payload = boards.map((b) => {
    if (b.id === board.id) {
      return board
    }

    return b
  })

  addSyncWithStringify(payload)

  return {
    type: DRAG_LIST_ITEM,
    payload,
    selectedBoard: board,
  }
}
