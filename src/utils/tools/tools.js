export const hidden = [`none`, `none`, `block`]

export function shortid() {
  //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )
}

export const isBoolean = arg => {
  return typeof arg === "boolean"
}

export const makeArray = string => {
  const newArr = string.split(", ")
  return newArr
}

export const isExternal = string => {
  const urlregex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  return urlregex.test(string)
}

export const doesInclude = (arr = [], idx = 0) => arr.includes(idx)

export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

export const randomNumGen = (
  // array of random nums
  num, // number of random numbers to generate
  limit = 100 // highest number possible
) => Array.from(Array(num)).map(() => Math.floor(Math.random() * limit))

export const randomConditional = (probability, { truthy, falsy }) =>
  Math.random() >= probability ? truthy : falsy

export const isSSR = typeof window === "undefined"
export const isDev = process.env.NODE_ENV === "development"
