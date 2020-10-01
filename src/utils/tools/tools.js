/**********************************
 * * Enironment helpers
 * ********************************
 */
export const isApiSupported = api => api in window
// if (!isApiSupported('IntersectionObserver')) {}
export const isClient = typeof window === "object"
export const isSSR = typeof window === "undefined"
export const isDev =
  process &&
  process.env &&
  (!process.env.NODE_ENV || process.env.NODE_ENV === "development")

/**********************************
 * * Typography Helpers
 * ********************************
 */

export const getFontSize = () =>
  !isSSR &&
  parseFloat(
    getComputedStyle(document.body, null).fontSize.replace(/[^\d]/g, "")
  )

export const convertEmToPx = val => val.replace("em", "") * getFontSize() + "px"

export const capitalize = string =>
  string.replace(/\b\w/g, c => c.toUpperCase())
//https://attacomsian.com/blog/string-capitalize-javascript

/**********************************
 * * Convenience Functions
 * ********************************
 */
export function shortid() {
  //http://stackoverflow.com/questions/105034/how-to-create-a-guid-uuid-in-javascript
  return (
    Math.random().toString(36).substring(2, 15) +
    Math.random().toString(36).substring(2, 15)
  )
}

export function formatNumber(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,")
}

export const randomNumGen = (
  // array of random nums
  num, // number of random numbers to generate
  limit = 100 // highest number possible
) => Array.from(Array(num)).map(() => Math.floor(Math.random() * limit))

export const isExternal = string => {
  const urlregex = /^(http:\/\/www\.|https:\/\/www\.|http:\/\/|https:\/\/)?[a-z0-9]+([\-\.]{1}[a-z0-9]+)*\.[a-z]{2,5}(:[0-9]{1,5})?(\/.*)?$/
  return urlregex.test(string)
}

export const randomConditional = (probability, { truthy, falsy }) =>
  Math.random() >= probability ? truthy : falsy
export const hidden = [`none`, `none`, `block`]

/**********************************
 * * Array Operations
 * ********************************
 */

export const makeArray = string => {
  const newArr = string.split(", ")
  return newArr
}

export const doesInclude = (arr = [], idx = 0) => arr.includes(idx)

/**********************************
 * * Object Operations
 * ********************************
 */

export const mapObject = obj => {
  return isObject(obj)
    ? Object.entries(obj).map((entry, i) => {
        return isObject(entry) ? mapObject(entry) : entry
      })
    : obj
}

export const hasOwnProperty = (obj, prop) =>
  obj ? Object.prototype.hasOwnProperty.call(obj, prop) : false

/**********************************
 * * Conditional Checks
 * ********************************
 */
export const isBoolean = arg => {
  return typeof arg === "boolean"
}

export const isTruthy = (condition, setting) =>
  condition && setting ? setting : !isBoolean(condition) && condition

export const isArray = obj => (Array.isArray(obj) ? true : false)
export const isNull = obj => (obj === null ? true : false)
export const isArrayOrNull = obj => (isNull(obj) && isArray(obj) ? true : false)
export const isObject = obj =>
  obj !== null &&
  typeof obj !== "string" &&
  typeof obj !== "number" &&
  !Array.isArray(obj) &&
  typeof obj === "object"
    ? true
    : false
