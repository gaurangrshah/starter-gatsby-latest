import React from "react"
import { Box } from "@chakra-ui/core"

import { BaseContainer } from "../layout"
import { sinkDefault } from "../components"

export const Sizes = ({ sizes }) => {
  console.log("sizes", sizes)
  return (
    <BaseContainer fluid minH={"60vh"} my={12 * 2}>
      sizes
      {Object.entries(sizes).map((size, i) => (
        <Box
          key={i}
          children={JSON.stringify(size, null, 2)}
          w={size[1]}
          {...sinkDefault(true)}
          bg={"mode.light.bg3"}
          minH={28}
        />
      ))}
    </BaseContainer>
  )
}
