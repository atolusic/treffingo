const localStorageRef = window.localStorage

export const add = localStorage.setItem.bind(localStorageRef)
export const remove = localStorage.removeItem.bind(localStorageRef)
export const get = localStorage.getItem.bind(localStorageRef)
export const stringify = payload => JSON.stringify(payload)
export const parse = string => JSON.parse(string)

export const ls = key => (fn, delay = 3000) => set => new Promise((resolve, reject) => {
  setTimeout(() => {
    try {
      resolve(fn(key, set))
    } catch (e) {
      reject(e)
    }
  }, delay)
})

export const lsSync = key => fn => set => fn(key, set)
