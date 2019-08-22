import {
  GET_THEME,
  TOGGLE_DARK_MODE,
} from '../constants/actionTypes'

export default (state, action) => {
  switch (action.type) {
    case TOGGLE_DARK_MODE:
      return {
        ...state,
        theme: {
          ...state.theme,
          dark: !state.theme.dark,
        },
      }
    default:
      return state
  }
}
