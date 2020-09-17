import React from "react"
import { Box } from "@chakra-ui/core"

import { AnimatePresence } from "framer-motion"
import { MotionBox } from "./motion"
import useInView from "react-cool-inview"

const transition = {
  duration: 0.3,
  delay: 0.2,
}

const variants = {
  "fade-up": {
    hidden: { opacity: 0, y: 150 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-down": {
    hidden: { opacity: 0, y: -150 },
    visible: { opacity: 1, y: 0 },
  },
  "fade-left": {
    hidden: { opacity: 0, x: -150 },
    visible: { opacity: 1, x: 0 },
  },
  "fade-right": {
    hidden: { opacity: 0, x: 150 },
    visible: { opacity: 1, x: 0 },
  },
}

export const PresenceBox = ({
  presenceProps,
  show,
  variants,
  children,
  ...rest
}) => {
  return (
    <AnimatePresence {...presenceProps}>
      {show && (
        <MotionBox
          variants={variants}
          transition={{ x: transition, y: transition, opacity: "linear" }}
          {...rest}
        >
          {children}
        </MotionBox>
      )}
    </AnimatePresence>
  )
}

export const TrackingBox = ({
  show = true,
  once = true,
  rootMargin = "-50px 0px",
  variant = "fade-up",
  children,
  ...rest
}) => {
  const { ref, inView } = useInView({
    // Stop observe when the target enters the viewport, so the "inView" only triggered once
    unobserveOnEnter: once,
    // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
    rootMargin: rootMargin,
  })
  return (
    <Box ref={ref} overflow="hidden">
      <PresenceBox {...rest} show={show && inView} variants={variants[variant]}>
        {children}
      </PresenceBox>
    </Box>
  )
}
