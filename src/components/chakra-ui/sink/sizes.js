import React from "react"
import { Box } from "@chakra-ui/core"

import { BaseContainer } from "../layout"
import { AccordionItem } from "../accordion-item"

export const Sizes = ({ sizes }) => {
  return (
    <AccordionItem title="Sizes">
      <BaseContainer fluid minH={"60vh"} my={12 * 2}>
        sizes
        {Object.entries(sizes).map((size, i) => (
          <Box
            key={i}
            children={JSON.stringify(size, null, 2)}
            w={size[1]}
            {...defaults(true)}
            bg={"mode.light.bg3"}
            minH={28}
          />
        ))}
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
