import React from "react"
import { Box, forwardRef } from "@chakra-ui/core"

import { AnimatePresence } from "framer-motion"
import { MotionBox } from "./motion"
import useInView from "react-cool-inview"

const transition = {
  duration: 0.3,
  delay: 0.2,
}

const defaultVariants = {
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
          initial="hidden"
          animate="visible"
          exit="exit"
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
  show = false,
  once = false,
  threshold = 0.5,
  rootMargin = "-300px 0px",
  variant = "fade-up",
  children,
  ...rest
}) => {
  const { ref, inView } = useInView({
    // // Stop observe when the target enters the viewport, so the "inView" only triggered once
    unobserveOnEnter: once,
    threshold: threshold,
    // trackVisibility: true,
    // // Set a minimum delay between notifications, it must be set to 100 (ms) or greater
    // // For performance perspective, use the largest tolerable value as much as possible
    // delay: 100,
    // // Shrink the root margin, so the animation will be triggered once the target reach a fixed amount of visible
    rootMargin: rootMargin,
    // onEnter: ({ unobserve }) => {
    //   // Stop observe when the target enters the viewport, so the callback only triggered once
    //   unobserve()
    //   // Fire an analytic event to your tracking service
    //   console.log("🍋 is seen")
    // },
  })
  // console.log("⭕️ref, inView", ref, inView)
  return (
    <Box id="presence-ref" ref={ref} mt={12 * 4} overflow="hidden">
      <PresenceBox
        {...rest}
        show={show && inView}
        variants={defaultVariants[variant]}
      >
        {children}
      </PresenceBox>
    </Box>
  )
}
