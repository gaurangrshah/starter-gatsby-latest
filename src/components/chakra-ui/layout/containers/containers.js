import React from "react"
import { Box, Flex, useColorMode, forwardRef } from "@chakra-ui/core"

import { extras } from "../../chakra"
import { isBoolean } from "../../../../utils"

const baseDefaults = {
  position: "relative",
  mx: "auto",
  zIndex: "base",
}

const base = ({ fluid, max, pattern, ...rest }) => ({
  backgroundImage: pattern && extras.ptrn,
  w: [
    fluid ? "100%" : max ? "5xl" : "80%",
    null,
    null,
    max && fluid ? "5xl" : null,
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

export const BaseContainer = forwardRef(
  ({ fluid, max, pattern, children, ...rest }, ref) => (
    <ContentLogic
      ref={ref && ref}
      as="section"
      className="base-container"
      children={children}
      {...baseDefaults}
      {...base({ fluid, max, pattern })}
      {...rest}
    />
  )
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
    maxW={maxW && "5xl"}
    mx="auto"
    zIndex={10}
    className={`content`}
    children={children}
    {...rest}
  />
)
