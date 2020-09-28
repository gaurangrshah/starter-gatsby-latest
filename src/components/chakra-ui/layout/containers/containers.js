import React from "react"

import { constants } from "../../components"
import { ContentLogic } from "./ch-container"

// import { base, row, ContentLogic } from "./container-logic"

// export const BaseContainer = ({ fluid, max, pattern, children, ...rest }) => (
//   <ContentLogic
//     as="section"
//     className={`base-container`}
//     children={children}
//     {...base({ ...rest, fluid, max, pattern })}
//     {...rest}
//   />
// )

// export const Row = ({
//   responsive,
//   reverse,
//   reset,
//   center,
//   max,
//   fluid,
//   pattern,
//   children,
//   ...rest
// }) => (
//   <ContentLogic
//     className={`row`}
//     children={children}
//     {...row({ max, fluid, pattern, responsive, reverse, reset, center })}
//     {...rest}
//   />
// )

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
