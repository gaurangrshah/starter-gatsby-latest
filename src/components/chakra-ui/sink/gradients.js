import React from "react"
import { Box, Divider, Heading, SimpleGrid, Stack, Tag } from "@chakra-ui/core"

import { BaseContainer } from "../layout"
import { isObject, isArray, mapObject } from "../../../utils"
import { linearGradient } from "../chakra"

import { galleryBox, galleryBoxWrapper, stack, tag } from "./colors"
import { AccordionItem } from "../accordion-item"

const GradientBox = ({ gradient, idx }) =>
  isObject(gradient) ? (
    <Box {...galleryBoxWrapper}>
      <Box background={linearGradient(idx)} {...galleryBox} />

      <Stack isInline {...stack}>
        <Tag
          background={`rgb(${gradient.start})`}
          children={gradient.start}
          {...tag}
        />{" "}
        <Tag
          background={`rgb(${gradient.end})`}
          children={gradient.end}
          {...tag}
        />
      </Stack>
    </Box>
  ) : null

export const GradientBoxes = ({ gradients, heading }) => {
  return isObject(gradients) ? (
    <>
      {heading && <Heading children={heading} mt={12 * 2} />}
      {heading && <Divider mb={8} mt={8} />}{" "}
      <SimpleGrid columns={[2, 3, null, 4]} gap={3} mx="auto">
        {[...mapObject(gradients)].map((gradient, i) => (
          <GradientBox key={i} gradient={gradient} idx={i} />
        ))}
      </SimpleGrid>
    </>
  ) : (
    isArray(gradients) && (
      <>
        {heading && <Heading children={heading} mt={12 * 2} />}
        {heading && <Divider mb={8} mt={8} />}
        <SimpleGrid columns={[2, null, null, 4]} gap={3} mx="auto">
          {gradients?.length &&
            gradients?.map((gradient, i) => (
              <GradientBox key={i} gradient={gradient} idx={i} />
            ))}
        </SimpleGrid>
      </>
    )
  )
}

export const Gradients = ({ gradients }) => {
  return (
    <AccordionItem title="Gradients">
      <BaseContainer fluid minH={"40vh"} py={8} mx="auto">
        <GradientBoxes gradients={gradients} heading={"gradients"} />
      </BaseContainer>
    </AccordionItem>
  )
}
