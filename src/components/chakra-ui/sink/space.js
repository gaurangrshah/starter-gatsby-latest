import React from "react"
import { Box, Flex } from "@chakra-ui/core"

import { BaseContainer } from "../layout"
import { component } from "../components"
import { AccordionItem } from "../accordion-item"

export const Space = ({ space }) => {
  return (
    <AccordionItem title="Space">
      <BaseContainer
        fluid
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
    </AccordionItem>
  )
}

const minimum = 48

const defaults = min => ({
  bg: "mode.light.bg4",
  color: "white",
  shadow: "maxbttm",
  border: "1px",
  boxSizing: "border-box",
  minH: min && minimum,
  minW: min && minimum,
})
