import { ADD_BOARD, GET_BOARDS } from '../constants/actionTypes'

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
    default:
      return state
  }
}
