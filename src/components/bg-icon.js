import React from "react"
import { Box } from "@chakra-ui/core"

export const BGIcon = ({
  icon,
  size,
  padding = [".25rem", ".5rem", ".75rem", "1rem"],
  padIndex = 1,
  shadow,
  children,
  config,
  ...rest
}) => (
  <Box
    py={padding[padIndex]}
    px={padding[padIndex]}
    shadow={shadow && "icon"}
    alignSelf="flex-start"
    mr="auto"
    mb="2"
    rounded="5px"
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
