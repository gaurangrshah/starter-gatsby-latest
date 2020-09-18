import React from "react"
import { Box, PseudoBox } from "@chakra-ui/core"
export const Burger = ({ ...rest }) => {
  return (
    <Box display={["inline-block", null, null, "none"]} {...rest}>
      <PseudoBox
        as="svg"
        fill={`currentColor`}
        width="20px"
        viewBox="0 0 20 20"
        xmlns="http://www.w3.org/2000/svg"
        cursor="pointer"
        _hover={{
          transform: `scale(1.2)`,
        }}
      >
        <title>Menu</title>
        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
      </PseudoBox>
    </Box>
  )
}
