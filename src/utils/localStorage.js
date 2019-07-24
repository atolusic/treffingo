export const ls = key => fn => args => fn(key, ...args)
export const add = localStorage.setItem
export const remove = localStorage.removeItem
export const get = localStorage.getItem
export const stringify = payload => JSON.stringify(payload)
export const parse = string => JSON.parse(string)
