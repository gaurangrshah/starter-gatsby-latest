import React from "react"

export const MapChildren = ({ kids, newProps }) => {
  return React.Children.map(kids || null, (child, i) => (
    <child.type {...child.props} key={i} {...newProps} />
  ))
}
