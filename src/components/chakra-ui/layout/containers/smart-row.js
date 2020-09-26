import React, { useLayoutEffect, useEffect, useState } from "react"
import { row, ContentLogic } from "../containers"

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
  }, [columns, rowRef, width])

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
