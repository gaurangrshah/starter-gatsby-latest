import React from "react"
import { Box, useColorMode } from "@chakra-ui/core"
import { isBoolean } from "../../../utils"

import { extras } from "../chakra"

const container = ({ fluid, max, pattern, ...rest }) => ({
  w: [fluid ? "100%" : "80%", null, null, max && fluid && "70%"],
  backgroundImage: pattern && extras.ptrn,
  px: !fluid && "15px",
  zIndex: 0,
  position: "relative",
  mx: "auto",
  ...rest,
})

const row = ({ responsive, reverse, center, ...rest }) => ({
  display: "flex",
  mx: "auto",
  flexWrap: ["nowrap", null, null, "wrap"],
  flexDirection: responsive
    ? ["column", null, null, "row"]
    : reverse && responsive
    ? ["column-reverse", null, null, "row-reverse"]
    : "row",
  alignItems: center && "center",
  justifyContent: center && "center",
  zIndex: 0,
  ...rest,
})

export const Content = ({
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

  return (
    <>
      <Box
        color={
          color
            ? `mode.${colorMode}.${isBoolean(color) ? "background" : color}`
            : "inherit"
        }
        bg={bg ? `mode.${colorMode}.${isBoolean(bg) ? "bg" : bg}` : bg2 && bg2}
        shadow={isBoolean(shadow) ? `sm${colorMode}box` : shadow}
        rounded={isBoolean(rounded) ? "5px" : "rounded"}
        className={`content`}
        children={children}
        zIndex={10}
        {...contentProps}
        {...rest}
      />
    </>
  )
}

export const BaseContainer = ({ children, ...rest }) => {
  return (
    <Content
      as="section"
      className="base-container"
      children={children}
      {...container({ ...rest })}
    />
  )
}

export const Row = ({ children, ...rest }) => (
  <Content className="row" children={children} {...row(rest)} {...rest} />
)
