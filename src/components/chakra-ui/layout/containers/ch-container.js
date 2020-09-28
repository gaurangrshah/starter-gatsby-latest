import React from "react"
import { Box, Flex, chakra, useColorMode, forwardRef } from "@chakra-ui/core"

import { constants } from "../../components"
import { extras } from "../../chakra"
import { isBoolean } from "../../../../utils"

const Base = chakra(Box, {
  baseStyle: {
    as: "section",
    className: "base-container",
    position: "relative",
    mx: "auto",
    zIndex: 0,
  },
})

const base2 = ({ fluid, max, pattern, ...rest }) => ({
  position: "relative",
  mx: "auto",
  zIndex: 0,
  backgroundImage: pattern && extras.ptrn,
  w: [
    fluid ? "100%" : max ? constants?.MAX_CONTENT_WIDTH : "80%",
    null,
    null,
    max && fluid ? constants?.MAX_CONTENT_WIDTH : null,
  ],
  px: !fluid && "15px",
  ...rest,
})

export const BaseContent = ({
  bg,
  bg2,
  color,
  shadow,
  rounded,
  contentProps,
  children,
  ...rest
}) => {
  const { colorMode } = useColorMode()
  const contentLogic = {
    color: color
      ? `mode.${colorMode}.${isBoolean(color) ? "background" : color}`
      : "inherit",
    bg: bg ? `mode.${colorMode}.${isBoolean(bg) ? "bg" : bg}` : bg2 && bg2,
    shadow: isBoolean(shadow) ? `sm${colorMode}box` : shadow,
    rounded: isBoolean(rounded) ? "5px" : rounded,
  }
  return <Base {...contentLogic} children={children} {...rest} />
}

export const BaseContainer2 = forwardRef(
  ({ fluid, max, pattern, ...rest }, ref) => (
    <BaseContent ref={ref} {...base2({ fluid, max, pattern, ...rest })} />
  )
)
