import React from "react"
import { Box, Flex, chakra, useColorMode, forwardRef } from "@chakra-ui/core"

import { constants } from "../../components"
import { extras } from "../../chakra"
import { isBoolean } from "../../../../utils"

const baseDefaults = {
  position: "relative",
  mx: "auto",
  zIndex: 0,
}

const base = ({ fluid, max, pattern, ...rest }) => ({
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

export const row = ({ responsive, reverse, reset, center }) => ({
  display: "flex",
  flexWrap: ["nowrap", null, null, "wrap"],
  flexDirection: responsive
    ? ["column", null, null, "row"]
    : reverse && responsive
    ? ["column-reverse", null, null, reset ? "row" : "row-reverse"]
    : "row",
  alignItems: center && "center",
  justifyContent: center && "center",
})

export const ContentLogic = forwardRef(
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

export const BaseContainer = ({ fluid, max, pattern, children, ...rest }) => (
  <ContentLogic
    as="section"
    className="base-container"
    children={children}
    {...baseDefaults}
    {...base({ fluid, max, pattern })}
    {...rest}
  />
)

export const Row = ({
  responsive,
  reverse,
  reset,
  center,
  fluid,
  max,
  pattern,
  children,
  ...rest
}) => (
  <ContentLogic
    as={Flex}
    className="row"
    children={children}
    {...baseDefaults}
    {...base({ fluid, max, pattern })}
    {...row({ responsive, reverse, reset, center })}
    {...rest}
  />
)

export const Content = ({ maxW = true, children, ...rest }) => (
  <ContentLogic
    maxW={maxW && constants?.MAX_CONTENT_WIDTH}
    mx="auto"
    zIndex={10}
    className={`content`}
    children={children}
    {...rest}
  />
)
