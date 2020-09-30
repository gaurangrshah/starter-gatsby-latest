import React from "react"
import { Box } from "@chakra-ui/core"
import { BaseContainer } from "../layout"

import { convertEmToPx } from "../../../utils"

export const Breakpoints = ({ breakpoints }) => {
  return (
    <BaseContainer fluid minH={"20vh"} my={12 * 2}>
      {breakpoints?.map((point, i) => (
        <Box
          key={i}
          w={point}
          minW={"50px"}
          minH={"50px"}
          h={i}
          bg={"mode.light.bg4"}
          color={"white"}
          border={`0.5px solid lightgray`}
        >
          {`${point} / ${convertEmToPx(point)}`}
        </Box>
      ))}
    </BaseContainer>
  )
}
