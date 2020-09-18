import React from "react"
import { Box, useColorMode } from "@chakra-ui/core"
import { isBoolean } from "../../../utils/tools/tools"

export const Content = ({
  bg,
  bg2,
  shadow,
  rounded,
  test,
  contentProps,
  children,
  ...rest
}) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      color={`mode.${colorMode}.text`}
      bg={bg ? `mode.${colorMode}.${isBoolean(bg) ? "bg" : bg}` : bg2 && bg2}
      shadow={isBoolean(shadow) ? `sm${colorMode}box` : shadow}
      rounded={isBoolean(rounded) ? "5px" : "rounded"}
      className={`content-wrapper ${test && "test"}`}
      children={children}
      {...contentProps}
      {...rest}
    />
  )
}
