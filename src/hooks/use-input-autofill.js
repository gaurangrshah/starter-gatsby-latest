import { useEffect } from "react"
import { addDashes } from "../utils"

export const useInputAutofill = () => {
  useEffect(() => {
    document.getElementById("phone").addEventListener("change", e => {
      let value = e.target.value

      if (value.length === 3 || value.length === 7) {
        e.target.value += "-"
      }
      if (value.length === 10) {
        addDashes(e.target)
      }
    })
    document.getElementById("phone").addEventListener("blur", e => {
      let value = e.target.value
      if (value.length === 10) {
        addDashes(e.target)
      }
    })

    return () => {
      document.getElementById("phone").removeEventListener("change", e => {
        console.log("phone change listener removed")
      })
      document.getElementById("phone").removeEventListener("blur", e => {
        console.log("phone blur listener removed")
      })
    }
  })
}
