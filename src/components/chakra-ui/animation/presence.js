import React from "react"

import { useInView } from "react-intersection-observer"
import { Box } from "@chakra-ui/core"
import { AnimatePresence } from "framer-motion"
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/transition"
import { BaseContainer } from "../layout/"
import { TransitionBox } from "./transition-box"

export const Presence = ({
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
    if (once) return
    presenceRef.current = inView
    // return () => setPresence(false)
  }, [presenceRef, inView])

  return (
    <Box ref={ref} overflow="hidden">
      {debug && (
        <Box position="fixed" top="8em" left="1em" p={2} border="2px solid red">
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
        inView={presenceRef.current || inView}
        {...rest}
        {...config?.transition}
      >
        {styles => (
          <BaseContainer
            className="presence-container"
            {...config.container}
            overflow="hidden"
            sx={{ ...styles }}
          >
            <AnimatePresence>{inView && <>{children}</>}</AnimatePresence>
          </BaseContainer>
        )}
      </TransitionBox>
    </Box>
  )
}

// const TransitionTypes = {
//   ScaleFade,
//   Fade,
//   Slide,
//   SlideFade,
// }

// export const TransitionBox = ({ type, inView, children, ...rest }) => {
//   const Transition = TransitionTypes[type]

//   return (
//     <Transition in={inView} {...rest}>
//       {children}
//     </Transition>
//   )
// }
