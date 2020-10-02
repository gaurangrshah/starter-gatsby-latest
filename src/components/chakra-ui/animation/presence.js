import React from "react"
import { useInView } from "react-intersection-observer"
import { Box } from "@chakra-ui/core"
import { Bugger } from "../../../utils"

const FloatBugger = ({ child, ...rest }) => (
  <div
    style={{
      position: "fixed",
      top: "8em",
      left: "1em",
      width: "200px",
      height: "auto",
      background: "white",
    }}
  >
    <pre>
      {child?.props && <code>{JSON.stringify(child.props, null, 2)}</code>}

      {rest && <code>{JSON.stringify(rest, null, 2)}</code>}
    </pre>
  </div>
)

const defaultConfig = {
  rootMargin: "-50px",
  threshold: 0.2,
  delay: 200,
}

export const Presence = ({ config, debug, bugger, children, ...rest }) => {
  const { ref, inView } = useInView({
    // https://github.com/thebuilder/react-intersection-observer
    ...defaultConfig,
    ...config,
    // skip: inView && true,
    // initialInView: false,
    triggerOnce: true,
  })

  return (
    <Box ref={ref}>
      {debug ? (
        <Bugger watch={{ ref: ref, inView: inView, rest: rest }}>
          {React.Children.map(children || null, (child, i) => (
            <child.type {...child?.props} {...{ in: inView }} key={i} />
          ))}
        </Bugger>
      ) : (
        React.Children.map(children || null, (child, i) => (
          <>
            <child.type {...child?.props} {...{ in: inView }} key={i} />
            {bugger && <FloatBugger child={child} {...rest} />}
          </>
        ))
      )}
    </Box>
  )
}
