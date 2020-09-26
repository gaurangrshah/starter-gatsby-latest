import React, { useLayoutEffect, useEffect, useState } from "react"
import { Box, useColorMode } from "@chakra-ui/core"
import { isBoolean } from "../../../utils"

import { extras } from "../chakra"
import { constants } from "../components"

export const base = ({ fluid, max, pattern, ...rest }) => ({
  position: "relative",
  // w: "100%",
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
  ...rest
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

export const BaseContainer = ({ fluid, max, pattern, children, ...rest }) => {
  return (
    <ContentLogic
      as="section"
      className={`base-container`}
      children={children}
      {...base({ ...rest, fluid, max, pattern })}
      {...rest}
    />
  )
}

export const Row = ({
  responsive,
  reverse,
  reset,
  center,
  max,
  fluid,
  pattern,
  children,
  ...rest
}) => {
  return (
    <ContentLogic
      className={`row`}
      children={children}
      {...row({ max, fluid, pattern, responsive, reverse, reset, center })}
      {...rest}
    />
  )
}

export const SmartRow = ({ columns, children, childProps, ...rest }) => {
  // 🚧 not in use, needs to be re-worked.
  const rowRef = React.createRef()
  const colWidthRef = React.useRef() // width of each child
  const [width, setWidth] = useState(null) // rowRef width

  useLayoutEffect(() => {
    if (!rowRef.current) return
    setWidth(rowRef.current.offsetWidth)
    colWidthRef.current = `${width / columns}px`
    if (!colWidthRef.current > 0) {
      colWidthRef.current = `${width}px`
    }
    console.log(colWidthRef.current)
  }, [rowRef.current])

  const [newChildren, setState] = useState(null)

  useEffect(() => {
    const newChildren = React.Children.map(children, (child, i) => {
      if (!child?.props || child?.props?.w) return child

      // currently bypassing all this functionality and simply returning children back.

      return React.cloneElement(child, {
        ...child.props,
        ...childProps,
        w: colWidthRef.current,
        mx: "auto",
        className: `row-edited`,
        border: `1px solid blue`,
      })
    })

    if (!newChildren?.length) return
    setState(newChildren)
  }, [children, childProps, columns, width])

  return (
    <ContentLogic
      ref={rowRef}
      mx="auto"
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
        maxW={constants?.MAX_CONTENT_WIDTH}
        mx="auto"
        zIndex={10}
        className={`content`}
        children={children}
        {...rest}
      />
    </>
  )
}
