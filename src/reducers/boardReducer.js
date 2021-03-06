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

export default (state, action) => {
  switch (action.type) {
    case GET_BOARDS:
      return {
        ...state,
        boards: action.payload,
      }
    case ADD_BOARD:
      return {
        ...state,
        boards: [...state.boards, action.payload],
        loading: false,
      }
    case GET_BOARD:
      return {
        ...state,
        selectedBoard: action.payload,
        boardNotFound: false,
        loading: false,
      }
    case BOARD_NOT_FOUND:
      return {
        ...state,
        boardNotFound: true,
        loading: false,
      }
    case START_LOADING:
      return {
        ...state,
        loading: true,
      }
    case ADD_BOARD_LIST:
      return {
        ...state,
        boards: action.payload,
        selectedBoard: action.selectedBoard,
      }
    case ADD_LIST_ITEM:
      return {
        ...state,
        boards: action.payload,
        selectedBoard: action.selectedBoard,
      }
    case DRAG_LIST_ITEM:
      return {
        ...state,
        boards: action.payload,
        selectedBoard: action.selectedBoard,
      }
    default:
      return state
  }
}
