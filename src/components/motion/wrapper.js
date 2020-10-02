import React from "react"
import { AnimatePresence } from "framer-motion"
import { Box, forwardRef } from "@chakra-ui/core"
import { useInView } from "react-intersection-observer"

import { MotionBase } from "./motion"
import { shortid } from "../../utils"

export const Wrapper = forwardRef(
  (
    { layoutId = "default", show, initial, exitBeforeEnter, children, ...rest },
    fowardedRef
  ) => {
    const presenceProps = {
      initial: initial,
      exitBeforeEnter: exitBeforeEnter,
    }
    const motionSettings = {
      key: `presence-${shortid()}`,
      initial: "hidden",
      animate: "visible",
      exit: "hidden",
    }
    const containerVariants = {
      hidden: {
        opacity: 0,
      },
      visible: {
        opacity: 1,
      },
    }
    const transition = {
      duration: 0.4,
      delay: 0.1,
    }

    const {
      ref,
      inView,
      // entry
    } = useInView({
      /* Optional options */
      // rootMargin: rootMargin,
      // skip: inView && true,
      threshold: 0.2,
      // triggerOnce: (inView && once) || false,
      initialInView: false,
    })

    // const animateRef = useRef()
    return (
      <AnimatePresence {...presenceProps}>
        <Box ref={ref}>
          {show && inView && (
            <MotionBase
              {...motionSettings}
              variants={containerVariants}
              {...transition}
              {...rest}
            >
              <AnimatePresence>{children}</AnimatePresence>
            </MotionBase>
          )}
        </Box>
      </AnimatePresence>
    )
  }
)
