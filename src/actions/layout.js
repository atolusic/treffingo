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

const setDarkMode = (dark) => {
  const stringifiedInsertData = stringify({ dark })

  themeLs(add)(stringifiedInsertData)
}

export const toggleDarkMode = () => {
  const theme = getThemeFromLs()

  setDarkMode(!theme.dark)

  return {
    type: TOGGLE_DARK_MODE,
  }
}

export const getTheme = () => {
  const theme = getThemeFromLs()

  if (!theme) {
    setDarkMode(false)

    return getThemeFromLs()
  }

  return theme
}
