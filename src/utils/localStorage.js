const localStorageRef = window.localStorage
export const ls = key => fn => set => fn(key, set)
export const add = localStorage.setItem.bind(localStorageRef)
export const remove = localStorage.removeItem.bind(localStorageRef)
export const get = localStorage.getItem.bind(localStorageRef)
export const stringify = payload => JSON.stringify(payload)
export const parse = string => JSON.parse(string)
