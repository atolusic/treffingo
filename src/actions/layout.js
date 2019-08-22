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

const themeLs = lsSync('theme')
const getThemeFromLs = () => {
  const json = themeLs(get)()
  return json ? parse(json) : json
}

export const toggleDarkMode = () => ({
  type: TOGGLE_DARK_MODE,
})

export const getTheme = () => {
  const theme = getThemeFromLs()

  if (!theme) {
    themeLs(add)(stringify({
      dark: false,
    }))

    return getThemeFromLs()
  }

  return theme
}
