import React from "react"

import { useInView } from "react-intersection-observer"
import { Box } from "@chakra-ui/core"
import { Bugger } from "../../../utils"
import { AnimatePresence } from "framer-motion"
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/transition"
import { BaseContainer } from "../layout/"

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
    skip: true,
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
          </>
        ))
      )}
    </Box>
  )
}

export const Presence2 = ({
  type = "Fade",
  once = false,
  config,
  debug,
  children,
  ...rest
}) => {
  const presenceRef = React.useRef(false)

  const { ref, inView } = useInView({
    // https://github.com/thebuilder/react-intersection-observer
    rootMargin: "-50px",
    threshold: [0.2],
    delay: 100,
    ...config?.presence,
    // skip: inView && true,
    // initialInView: false,
    triggerOnce: once,
  })

  React.useEffect(() => {
    if (!inView) return
    if (presenceRef.current) return
    presenceRef.current = inView
    // return () => setPresence(false)
  }, [presenceRef, inView])

  return (
    <Box ref={ref}>
      {debug && (
        <Box position="fixed" top="6em" left="1em" p={2} border="2px solid red">
          {`inView: ${inView}`}
          <br />
          {`presence: ${presenceRef.current}`}
          <br />
          {`trigger: ${once}`}
          <br />
          {JSON.stringify(config, null, 2)}
        </Box>
      )}
      <TransitionBox
        type={type}
        inView={presenceRef.current}
        {...rest}
        {...config?.transition}
      >
        {styles => (
          <BaseContainer
            className="presence-container"
            {...config.container}
            sx={{ minH: "20vh", mx: "auto", ...styles }}
          >
            <AnimatePresence>{inView && <>{children}</>}</AnimatePresence>
          </BaseContainer>
        )}
      </TransitionBox>
    </Box>
  )
}

const TransitionTypes = {
  ScaleFade,
  Fade,
  Slide,
  SlideFade,
}

export const TransitionBox = ({ type, inView, children, ...rest }) => {
  const Transition = TransitionTypes[type]

  return (
    <Transition in={inView} {...rest}>
      {children}
    </Transition>
  )
}
