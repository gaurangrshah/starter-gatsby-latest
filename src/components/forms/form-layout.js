import React from "react"

import { BlockText } from "../blocks/blocks"
import { Content } from "../chakra-ui"

import { useInputAutofill } from "../../hooks/use-input-autofill"
import { FormBuild } from "./form-build"

export const FormLayout = () => {
  useInputAutofill() // adds eventlistener that adds dashes in phone number
  return (
    <>
      <BlockText
        text="Send us a quick message!"
        type="heading"
        as="h3"
        mb={6}
      />
      <FormBuild />
    </>
  )
}
