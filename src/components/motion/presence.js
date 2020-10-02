import React from "react"
import { Box, forwardRef } from "@chakra-ui/core"

import { AnimatePresence } from "framer-motion"
import { MotionBox, MotionBase } from "./motion"
// import useInView from "react-cool-inview"
import { shortid } from "../../utils"
import { useInView } from "react-intersection-observer"

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

// const containerVariants = {
//   "fade-in-scale": {
//     hidden: { opacity: 0, y: 0 },
//     visible: { opacity: 1, y: "auto" },
//     // exit: { opacity: 0, y: 300, transition },
//   },
// }

const motionSettings = {
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
              {...motionSettings}
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
      {children}
    </PresenceBox>
  )
}

export const PresenceContainer = forwardRef(
  (
    {
      containerConfig,
      motionConfig,
      presenceConfig,
      show,
      children,
      height,
      minH,
      h,
      ...rest
    },
    ref
  ) => {
    return (
      <AnimatePresence {...presenceConfig}>
        <Box ref={ref} minH="4xl">
          {show && (
            <MotionBase
              fluid
              {...containerConfig}
              {...rest}
              {...motionConfig}
              {...motionSettings}
              minH={height || minH || h}
            >
              {children}
            </MotionBase>
          )}
        </Box>
      </AnimatePresence>
    )
  }
)
