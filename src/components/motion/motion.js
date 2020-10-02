import { Box, Button, Flex, Heading, Text } from "@chakra-ui/core"
import { motion } from "framer-motion"

import { BaseContainer, Content } from "../chakra-ui"

// chakra
export const MotionBox = motion.custom(Box)
export const MotionButton = motion.custom(Button)

export const MotionFlex = motion.custom(Flex)
export const MotionHeading = motion.custom(Heading)
export const MotionText = motion.custom(Text)

// custom
export const MotionContent = motion.custom(Content)

export const MotionBase = motion.custom(BaseContainer)

// export const MotionRefBox = forwardRef(({ ...props }, ref) => {
//   console.log("❗️ref", ref, props)
//   return <MotionBox ref={ref} {...props} />
// })
// const MotionCHBox = forwardRef(
//   chakra(motion.div, {
//     baseStyle: {
//       m: 2,
//     },
//   })
// )

// export const MotionCHRefBox = forwardRef((props, ref) => {
//   console.log("❗️MotionCHRefBox", props, ref)
//   return <MotionCHBox ref={ref} {...props} />
// })

// export const CHMotionBox = forwardRef((props, ref) => (
//   <Box as={motion.div} ref={ref} {...props} />
// ))
