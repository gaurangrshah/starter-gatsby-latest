import React from "react"

import { useInputAutofill } from "../../hooks/use-input-autofill"
import { FormBuild } from "./form-build"

export const FormLayout = () => {
  useInputAutofill() // adds eventlistener that adds dashes in phone number
  return <FormBuild />
}