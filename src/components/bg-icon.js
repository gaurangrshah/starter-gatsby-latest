import React from "react"
import { Box } from "@chakra-ui/core"

export const BGIcon = ({ icon, size, shadow, children, config, ...rest }) => (
  <Box
    py={"0.25rem"}
    px={"0.5rem"}
    mr="auto"
    mb="2"
    alignSelf="flex-start"
    rounded="5px"
    shadow={shadow && "icon"}
    {...rest}
  >
    <Box
      as="i"
      className={`fas fa-${icon} ${size ? `fa-${size}` : ""}`}
      mx="auto"
      style={{ margin: "0 auto", ...config?.icon }}
    />
  </Box>
)
