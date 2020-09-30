import React from "react"
import { Box, SimpleGrid, Stack, Tag } from "@chakra-ui/core"

import { BaseContainer } from "../layout"
import { mapObject } from "../../../utils"

import { galleryBoxWrapper, galleryBox, stack, tag } from "./colors"

export const Shadows = ({ shadows }) => {
  return (
    <BaseContainer fluid minH={"40vh"} py={8} mx="auto">
      <SimpleGrid columns={[2, null, null, 4]} gap={3} mx="auto">
        {mapObject(shadows).map((shadow, i) => (
          <Box key={i} {...galleryBoxWrapper}>
            <Box {...galleryBox} shadow={shadow[0]}></Box>
            <Stack {...stack}>
              <Tag colorScheme="blue" children={shadow[0]} {...tag} />
              <Tag children={shadow[1]} {...tag} />
            </Stack>
          </Box>
        ))}
      </SimpleGrid>
    </BaseContainer>
  )
}
