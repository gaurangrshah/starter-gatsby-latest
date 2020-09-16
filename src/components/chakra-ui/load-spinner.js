import React from "react"
import { Box, Spinner } from "@chakra-ui/core"

export const LoadSpinner = props => {
  return (
    <Box
      w="100%"
      h="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
      my="auto"
      {...props}
    >
      <Spinner />
    </Box>
  )
}
