import { useLayoutEffect } from "react"

export const useBodyScrolllock = toggle => {
  useLayoutEffect(() => {
    let originalStyle
    let lockScroll = !toggle ? false : true
    if (lockScroll) {
      originalStyle = window.getComputedStyle(document.body).overflow
      document.body.style.overflow = "hidden"
    }
    return () => (document.body.style.overflow = originalStyle)
  })
}
