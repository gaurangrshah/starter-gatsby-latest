import React from "react"
import { Box, Flex, Tag } from "@chakra-ui/core"

import { breakpoints, zIndices, sizes, space } from "../../../../theme.json"
import { convertEmToPx } from "../../../utils"
import { BaseContainer } from "../layout/containers/containers"
import { component } from "../components"

const min = 48

const defaults = min => ({
  bg: "mode.light.bg4",
  color: "white",
  shadow: "maxbttm",
  border: "1px",
  boxSizing: "border-box",
  minH: min && min,
  minW: min && min,
})

export const Measures = () => (
  <>
    <BaseContainer
      bg
      as={Flex}
      mt={12}
      direction="column"
      align="flex-start"
      justify="center"
      minH="80vh"
      maxW="full"
    >
      Breakpoints
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
    <BaseContainer mx="auto">
      <Flex border={"4px"}>
        {Object.entries(zIndices).map((index, i) => (
          <Tag key={i}>{index}</Tag>
        ))}
      </Flex>
    </BaseContainer>
    <BaseContainer
      position="relative"
      minH="30vh"
      {...component?.flex?.rowBetween}
    >
      zIndices
      {Object.entries(zIndices)
        .slice(0)
        .reverse()
        .map((index, i) => (
          <Box
            key={i}
            {...defaults(true)}
            zIndex={index}
            position="absolute"
            w={`${i * 0.05 * 100}%`}
            h={`${i * 0.05 * 100}%`}
            pl={"5%"}
            textAlign="right"
          >
            {index}
          </Box>
        ))}
    </BaseContainer>
    <BaseContainer>
      sizes
      {Object.entries(sizes).map((size, i) => (
        <Box
          key={i}
          children={JSON.stringify(size, null, 2)}
          w={size[1]}
          {...defaults(min)}
          bg={"mode.light.bg3"}
          minH={28}
        />
      ))}
    </BaseContainer>
    <BaseContainer
      fluid
      bg
      p={"10%"}
      minH={"40vh"}
      justify="center"
      {...component?.flex?.columnCenter}
    >
      <Flex
        w={"7xl"}
        {...component?.flex?.columnContentFull}
        flexDirection={"column"}
        alignItems="flex-start"
      >
        spaces
        {Object.entries(space).map((spc, i) => (
          <React.Fragment key={i}>
            <Flex
              border="2px"
              borderColor="white"
              justifyContent="space-between"
            >
              <Box w={spc[1]} {...defaults} bg={"mode.light.bg3"} minH={28} />
              {JSON.stringify(spc, null, 2)}
            </Flex>
          </React.Fragment>
        ))}
      </Flex>
    </BaseContainer>
  </>
)
