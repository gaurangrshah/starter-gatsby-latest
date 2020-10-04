import React from "react"
import { Presence } from "./presence"
import { Box } from "@chakra-ui/core"
import { MotionBox } from "../../motion/motion"
import { shortid } from "../../../utils"

const boxy = {
  id: "box-check",
  w: "200px",
  h: "200px",
  minH: "150px",
  bg: "mode.light.bg3",
  my: 2,
  border: "1px solid red",
  // ...component.flexColumnCenter,
}

const defaultProps = {
  variants: {
    hidden: { opacity: 0, y: 300 },
    visible: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: 300 },
  },
  motionTransition: {
    duration: 0.4,
    delay: 0.2,
  },
}

const variants = [
  { hidden: { y: 300 }, visible: { y: 0 }, exit: { y: 300 } },
  { hidden: { x: 300 }, visible: { x: 0 }, exit: { x: 300 } },
  { hidden: { y: -300 }, visible: { y: 0 }, exit: { y: -300 } },
  { hidden: { x: -300 }, visible: { x: 0 }, exit: { x: -300 } },
]

const motionDefaults = {
  initial: "hidden",
  animate: "visible",
  exit: "exit",
}

export const MotionEntrances = () => {
  return (
    <Box my={"100vh"}>
      <Presence
        debug
        type="Fade"
        timeout={2000}
        config={{
          container: {
            // bg: "bg2",
            shadow: true,
            my: 24,
            display: "flex",
            justifyContent: "'space-between',",
            mx: "auto",
          },
        }}
      >
        <MotionBox
          {...boxy}
          className="motion-ready"
          children={"enter-up"}
          key={`presence-0${() => shortid()}`}
          {...motionDefaults}
          variants={variants[0]}
          transition={defaultProps.motionTransition}
          border="1px solid red"
        />
        <MotionBox
          {...boxy}
          className="motion-ready"
          children={"enter-left"}
          key={`presence-1${() => shortid()}`}
          {...motionDefaults}
          variants={variants[1]}
          transition={defaultProps.motionTransition}
          border="1px solid red"
        />
        <MotionBox
          {...boxy}
          className="motion-ready"
          children={"enter-right"}
          key={`presence-2${() => shortid()}`}
          {...motionDefaults}
          variants={variants[2]}
          transition={defaultProps.motionTransition}
          border="1px solid red"
        />
        <MotionBox
          {...boxy}
          className="motion-ready"
          children={"enter-bottom"}
          key={`presence-3${() => shortid()}`}
          {...motionDefaults}
          variants={variants[3]}
          transition={defaultProps.motionTransition}
          border="1px solid red"
        />
      </Presence>
    </Box>
  )
}
