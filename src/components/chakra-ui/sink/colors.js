import React from "react"
import { Box, Divider, Heading, SimpleGrid, Stack, Tag } from "@chakra-ui/core"

import { BaseContainer } from "../layout"
import { isObject, isArray, mapObject } from "../../../utils"

export const galleryBox = {
  h: 32,
  color: "facebook.10",
  border: "2px",
  borderColor: "blackAlpha.100",
  rounded: "5px",
}

export const galleryBoxWrapper = {
  w: "full",
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

export const ColorBox = ({ color }) =>
  isArray(color) ? (
    <Box {...galleryBoxWrapper}>
      <Box background={color[1]} {...galleryBox} />
      <Stack isInline {...stack}>
        <Tag colorScheme="blue" children={color[0]} {...tag} />{" "}
        <Tag children={color[1].toString()} {...tag} />
      </Stack>
    </Box>
  ) : null

export const ColorBoxes = ({ colors, heading }) => {
  return isObject(colors) ? (
    <>
      {heading && <Heading children={heading} mt={12 * 2} />}
      {heading && <Divider mb={8} mt={8} />}
      <SimpleGrid columns={[2, 3, null, 4]} gap={3} mx="auto">
        {[...mapObject(colors)].map((color, i) => (
          <ColorBox key={i} color={color} heading={heading} />
        ))}
      </SimpleGrid>
    </>
  ) : (
    isArray(colors) && (
      <>
        {heading && <Heading children={heading} mt={12 * 2} />}
        {heading && <Divider mb={8} mt={8} />}

        <SimpleGrid columns={[2, null, null, 4]} gap={3} mx="auto">
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
    <BaseContainer fluid minH={"40vh"} py={8} mx="auto">
      <ColorBoxes colors={defaults} />
      {restColors?.map((color, i) => (
        <ColorBoxes key={i} colors={color[1]} heading={color[0]} />
      ))}
    </BaseContainer>
  )
}
