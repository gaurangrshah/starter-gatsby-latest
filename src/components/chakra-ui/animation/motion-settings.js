export const motionDefaults = {
  initial: "hidden",
  animate: "visible",
  exit: "hidden",
}

export const motionLogic = (variants, transition) => ({
  variants: variants,
  transition: { x: transition, y: transition, opacity: "linear" },
})
