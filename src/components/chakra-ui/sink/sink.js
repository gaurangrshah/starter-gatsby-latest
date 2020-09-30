import React from "react"
import { Accordion } from "@chakra-ui/core"

import { Breakpoints } from "./breakpoints"
import { ZIndices } from "./z-indices"
import { Sizes } from "./sizes"
import { Space } from "./space"
import { Colors } from "./colors"
import { Shadows } from "./shadows"
import { Gradients } from "./gradients"
import { BaseContainer } from "../layout"

import {
  breakpoints,
  zIndices,
  sizes,
  space,
  colors,
  shadows,
} from "../../../../theme.json"
import { gradients } from "../chakra"

export const Sink = ({ ...rest }) => {
  return (
    <BaseContainer
      fluid
      my={12}
      minH="55vh"
      px={12}
      {...rest}
      overflowY="auto"
      overflowX="hidden"
    >
      <Accordion defaultIndex={0} allowToggle>
        <Breakpoints breakpoints={breakpoints} />
        <ZIndices zIndices={zIndices} />
        <Sizes sizes={sizes} />
        <Space space={space} />
        <Colors colors={colors} />
        <Shadows shadows={shadows} />
        <Gradients gradients={gradients} />
      </Accordion>
    </BaseContainer>
  )
}
