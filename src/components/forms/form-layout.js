import React from "react"

import { BlockText } from "../blocks/blocks"
import { Content } from "../chakra-ui"

import { useInputAutofill } from "../../hooks/use-input-autofill"
import { FormBuild } from "./form-build"

export const FormLayout = () => {
  useInputAutofill() // adds eventlistener that adds dashes in phone number
  return (
    <Content
      rounded
      shadow
      bg="background"
      className="form-cont"
      w={["100%", null, null, "80%"]}
      mx="auto"
      p={["15%", null, null, 12 * 2]}
      border="1px solid silver"
      textAlign="center"
    >
      <BlockText text="Send us a quick message!" />
      <FormBuild />
    </Content>
  )
}
