import {
  ADD_BOARD,
  GET_BOARDS,
  GET_BOARD,
  START_LOADING,
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
      }
    case GET_BOARD:
      return {
        ...state,
        selectedBoard: action.payload,
      }
    case START_LOADING:
      return {
        ...state,
        true: true,
      }
    default:
      return state
  }
}
