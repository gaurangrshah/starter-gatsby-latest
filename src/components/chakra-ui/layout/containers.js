import React, { useEffect, useState } from "react"
import { Box, useColorMode } from "@chakra-ui/core"
import { isBoolean } from "../../../utils"

import { extras } from "../chakra"
import { MAX_WIDTH, MAX_CONTENT_WIDTH } from "../components"

export const base = ({ fluid, max, pattern, ...rest }) => ({
  position: "relative",
  // w: "100%",
  mx: "auto",
  zIndex: 0,
  backgroundImage: pattern && extras.ptrn,
  w: [
    fluid ? "100%" : "80%",
    null,
    null,
    max && fluid ? MAX_CONTENT_WIDTH : null,
  ],
  px: !fluid && "15px",
  ...rest,
})

export const row = ({ responsive, reverse, reset, center, ...rest }) => ({
  display: "flex",
  flexWrap: ["nowrap", null, null, "wrap"],
  flexDirection: responsive
    ? ["column", null, null, "row"]
    : reverse && responsive
    ? ["column-reverse", null, null, reset ? "row" : "row-reverse"]
    : "row",
  alignItems: center && "center",
  justifyContent: center && "center",
  ...base({ ...rest }),
})

export const ContentLogic = ({
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
  return <Box {...contentLogic} children={children} {...rest} />
}

export const BaseContainer = ({ children, ...rest }) => {
  return (
    <ContentLogic
      as="section"
      className={`base-container`}
      children={children}
      {...base({ ...rest })}
      {...rest}
    />
  )
}

export const Row = ({ children, ...rest }) => {
  return (
    <ContentLogic
      className={`row`}
      children={children}
      {...row(rest)}
      {...rest}
    />
  )
}

export const SmartRow = ({ columns, children, ...rest }) => {
  const col3 = !columns
    ? Number(children.length) % 3 === 0
    : Number(columns) === 3
  const col2 = !columns
    ? Number(children.length) % 2 === 0
    : Number(columns) === 2

  const [newChildren, setState] = useState(null)

  useEffect(() => {
    const newChildren = React.Children.map(children, (child, i) => {
      if (!child?.props) return child
      return React.cloneElement(child, {
        ...child.props,
        maxW: [
          "100%",
          null,
          null,
          col3 ? "33%" : col2 ? "50%" : child?.props.maxW || child?.props.w,
        ],
        mx: "auto",
        className: `row-edited`,
      })
    })

    if (!newChildren?.length) return
    setState(newChildren)
  }, [children, col3, col2])

  return (
    <ContentLogic
      className={`row`}
      children={[newChildren]}
      {...row(rest)}
      {...rest}
    />
  )
}

export const Content = ({ children, ...rest }) => {
  return (
    <>
      <ContentLogic
        maxW={MAX_CONTENT_WIDTH}
        mx="auto"
        zIndex={10}
        className={`content`}
        children={children}
        {...rest}
      />
    </>
  )
}
