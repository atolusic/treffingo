import {
  TOGGLE_DARK_MODE,
} from '../constants/actionTypes'

import {
  lsSync,
  add,
  stringify,
  parse,
  get,
} from '../utils/localStorage'

const themeMode = lsSync('themeMode')

export const toggleDarkMode = () => {
  const { darkMode } = parse(themeMode(get)())

  return {
    type: TOGGLE_DARK_MODE,
    payload: !darkMode,
  }
}

export const setMode = () => {

}
