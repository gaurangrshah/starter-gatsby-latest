import React from "react"
import { Box, Flex } from "@chakra-ui/core"

import { BaseContainer } from "../layout"
import { component, sinkDefault } from "../components"

export const Space = ({ space }) => {
  return (
    <BaseContainer fluid minH={"40vh"}>
      <Flex
        {...component?.flex?.columnContentFull}
        flexDirection={"column"}
        alignItems="flex-start"
      >
        {Object.entries(space).map((spc, i) => (
          <React.Fragment key={i}>
            <Flex
              border="2px"
              borderColor="white"
              justifyContent="space-between"
            >
              <Box
                w={spc[1]}
                {...sinkDefault}
                bg={"mode.light.bg3"}
                minH={28}
              />
              {JSON.stringify(spc, null, 2)}
            </Flex>
          </React.Fragment>
        ))}
      </Flex>
    </BaseContainer>
  )
}
