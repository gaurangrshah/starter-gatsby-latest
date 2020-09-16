import { useEffect } from "react"

export const useInputAutofill = cb => {
  useEffect(() => {
    document.getElementById("phone").addEventListener("keydown", e => {
      let value = e.target.value
      let key = e.charCode || e.keyCode || 0

      if (key !== 8 && key !== 9) {
        if (value.length === 3 || value.length === 7) {
          e.target.value += "-"
        }
      }
      cb && cb()
      return (
        key === 8 ||
        key === 9 ||
        key === 46 ||
        (key >= 48 && key <= 57) ||
        (key >= 96 && key <= 105)
      )
    })

    return () => null
  })
}
