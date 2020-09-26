import React from "react"
import { Box, useColorMode } from "@chakra-ui/core"

import { extras } from "../../chakra"
import { constants } from "../../components"
import { isBoolean } from "../../../../utils"

export const base = ({ fluid, max, pattern, ...rest }) => ({
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

export const row = ({
  responsive,
  reverse,
  reset,
  center,
  fluid,
  max,
  pattern,
}) => ({
  display: "flex",
  flexWrap: ["nowrap", null, null, "wrap"],
  flexDirection: responsive
    ? ["column", null, null, "row"]
    : reverse && responsive
    ? ["column-reverse", null, null, reset ? "row" : "row-reverse"]
    : "row",
  alignItems: center && "center",
  justifyContent: center && "center",
  ...base({ fluid, max, pattern }),
})

export const ContentLogic = React.forwardRef(
  (
    { bg, bg2, color, shadow, rounded, contentProps, children, ...rest },
    ref
  ) => {
    const { colorMode } = useColorMode()
    const contentLogic = {
      color: color
        ? `mode.${colorMode}.${isBoolean(color) ? "background" : color}`
        : "inherit",
      bg: bg ? `mode.${colorMode}.${isBoolean(bg) ? "bg" : bg}` : bg2 && bg2,
      shadow: isBoolean(shadow) ? `sm${colorMode}box` : shadow,
      rounded: isBoolean(rounded) ? "5px" : rounded,
    }
    return <Box ref={ref} {...contentLogic} children={children} {...rest} />
  }
)
