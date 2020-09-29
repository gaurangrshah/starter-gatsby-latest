import React from "react"
import { Box, Heading, SimpleGrid, Stack, Tag } from "@chakra-ui/core"

import { BaseContainer } from "../layout/containers/containers"
import { isObject, isArray, mapObject } from "../../../utils/tools/tools"

export const galleryBox = {
  w: "3xs",
  h: "3xs",
  color: "facebook.10",
  border: "2px",
  borderColor: "blackAlpha.100",
  rounded: "5px",
}

export const galleryBoxWrapper = {
  p: 3,
  pb: 6,
  rounded: "5px",
  border: "2px",
  borderColor: "blackAlpha.100",
  mx: "auto",
}

export const stack = {
  mt: 3,
  justify: "flex-end",
}

export const tag = {
  border: "2px",
  borderColor: "blackAlpha.100",
}

const ColorBox = ({ color, heading }) =>
  isArray(color) ? (
    <Box {...galleryBoxWrapper}>
      <Box background={color[1]} {...galleryBox} />
      <Stack isInline justify="space-between">
        {/* <Tag colorScheme="yellow" children={heading} /> */}
        {/* {console.log(color)} */}
        <Stack isInline {...stack}>
          <Tag colorScheme="blue" children={color[0]} {...tag} />{" "}
          <Tag children={color[1].toString()} {...tag} />
        </Stack>
      </Stack>
    </Box>
  ) : null

export const ColorBoxes = ({ colors, heading }) => {
  return isObject(colors) ? (
    <>
      {heading && <Heading children={heading} mb={8} />}
      <SimpleGrid columns={6} gap={3} mx="auto">
        {[...mapObject(colors)].map((color, i) => (
          <ColorBox key={i} color={color} heading={heading} />
        ))}
      </SimpleGrid>
    </>
  ) : (
    isArray(colors) && (
      <>
        {heading && <Heading children={heading} mb={8} />}
        <SimpleGrid columns={6} gap={3} mx="auto">
          {colors?.length &&
            colors?.map((color, i) => (
              <ColorBox key={i} color={color} heading={heading} />
            ))}
        </SimpleGrid>
      </>
    )
  )
}

export const Colors = ({ colors }) => {
  const [transparent, current, black, white, ...restColors] = mapObject(colors)
  const defaults = [transparent, current, black, white]
  return (
    <BaseContainer minH={"40vh"} py={8} mx="auto">
      <ColorBoxes colors={defaults} heading={"default"} />
      {restColors?.map((color, i) => (
        <ColorBoxes key={i} colors={color[1]} heading={color[0]} />
      ))}
    </BaseContainer>
  )
}
