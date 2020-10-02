import React from "react"

export const MapChildren = ({ kids, newProps }) => {
  return React.Children.map(kids || null, (child, i) => (
    <child.type {...child.props} key={i} {...newProps} />
  ))
}

export const mapChildren = (debug = false, kids, newProps, Wrapper) => {
  // console.log('🐞 🗺 👶 running mapChildren')
  return (
    kids &&
    React.Children.map(kids || null, (child, i) =>
      Wrapper ? (
        <Wrapper key={`wrapper-${debug && "debug"}-${i}`}>
          <child.type {...child.props} {...newProps} />
          {debug &&
            console.table({
              ctx: "🐞🗺 👶 🎁",
              childProps: child?.props,
              childType: child?.type,
              debug: debug,
              extra: Wrapper,
            })}
        </Wrapper>
      ) : (
        <>
          <child.type {...child.props} key={i} {...newProps} />
          {debug &&
            console.table({
              ctx: "🐞🗺 👶:",
              childProps: child.props,
              childType: child.type,
              debug: debug,
            })}
        </>
      )
    )
  )
}
