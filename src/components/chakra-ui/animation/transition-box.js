import React from "react"
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/transition"

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
