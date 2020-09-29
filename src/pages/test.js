import React from "react"
import { Accordion } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"
import {
  breakpoints,
  zIndices,
  sizes,
  space,
  colors,
  shadows,
} from "../../theme.json"

import {
  BaseContainer,
  Breakpoints,
  ZIndices,
  Sizes,
  Space,
  Colors,
  Shadows,
  Gradients,
  gradients,
} from "../components/chakra-ui"

const TestPage = () => (
  <DefaultLayout>
    <BaseContainer my={12} minH="55vh">
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
  </DefaultLayout>
)

export default TestPage
