import React from "react"
import {
  AccordionItem as CHAccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
} from "@chakra-ui/core"

export const AccordionItem = ({ title, children }) => {
  return (
    <CHAccordionItem>
      <AccordionButton>
        <Box flex="1" textAlign="left">
          {title || "Section 1 title"}
        </Box>
        <AccordionIcon />
      </AccordionButton>
      <AccordionPanel pb={4}>{children}</AccordionPanel>
    </CHAccordionItem>
  )
}
