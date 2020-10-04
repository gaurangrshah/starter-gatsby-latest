// ❌ removable file
import React from "react"
import { Box, forwardRef } from "@chakra-ui/core"

import { AnimatePresence } from "framer-motion"
import { MotionBox } from "./motion"
import { shortid } from "../../utils"
import { useInView } from "react-intersection-observer"
import { component } from "../chakra-ui"

const transition = {
  duration: 0.4,
  delay: 0.1,
}

const motionVariants = {
  "fade-up": {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 300, transition },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -300 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 300, transition },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -300 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: 300, transition },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 300 },
    visible: { opacity: 1, x: 0 },
    exit: { opacity: 0, y: 300, transition },
  },
}

const motionDefaults = {
  key: `presence-${shortid()}`,
  initial: "hidden",
  animate: "visible",
  exit: "exit",
}

const motionLogic = (variants, transition) => ({
  variants: variants,
  transition: { x: transition, y: transition, opacity: "linear" },
})

export const PresenceBox = forwardRef(
  ({ initial, show, variants, children, ...rest }, ref) => {
    // console.log(ref)
    return (
      <AnimatePresence initial={initial}>
        <Box ref={ref}>
          {show && (
            <MotionBox
              {...motionDefaults}
              // variants={variants}
              // transition={{ x: transition, y: transition, opacity: "linear" }}
              {...motionLogic(variants, transition)}
              {...rest}
            >
              {children}
            </MotionBox>
          )}
        </Box>
      </AnimatePresence>
    )
  }
)

export const TrackingBox = ({
  show = false,
  once = false,
  threshold = 0.7,
  rootMargin = "-200px",
  variant = "fade-up",
  children,
  ...rest
}) => {
  const {
    ref,
    inView,
    // entry
  } = useInView({
    /* Optional options */
    // rootMargin: rootMargin,
    // skip: inView && true,
    threshold: threshold,
    // triggerOnce: (inView && once) || false,
    initialInView: false,
  })

  return (
    <PresenceBox
      {...rest}
      ref={ref}
      position="static"
      show={show && inView}
      variants={motionVariants[variant]}
      my={"25em"}
    >
      <Box position="fixed" w="200px" h="200px" top={"5em"} left={"2em"}>
        {`variant ${motionVariants[variant]}`}
        {`inView ${inView}`}
      </Box>
      {children}
    </PresenceBox>
  )
}

const boxy = {
  id: "box-check",
  w: "200px",
  h: "200px",
  minH: "150px",
  bg: "mode.light.bg3",
  my: 2,
  border: "1px solid red",
  ...component.flexColumnCenter,
}

const VARIANTS = [
  "fade-up",
  "fade-right",
  // "fade-down",
  "fade-left",
  "fade-up",
  "fade-right",
  // "fade-down",
  "fade-left",
]

export const Entrances = ({ children, ...rest }) => {
  return VARIANTS.map((variant, i) => (
    <TrackingBox key={i} show once exitBeforeEnter variant={variant} {...rest}>
      <Box {...boxy} children={variant} />
    </TrackingBox>
  ))
}
