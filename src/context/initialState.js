import { getTheme } from '../actions/layout'

export const boardInitialState = {
  boards: null,
  selectedBoard: null,
  boardNotFound: false,
  loading: false,
}

export const layoutInitialState = { theme: getTheme() }
