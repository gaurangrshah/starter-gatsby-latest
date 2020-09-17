import { Box, Button, Flex, Heading, Text, PseudoBox } from "@chakra-ui/core"
import { motion } from "framer-motion"

import { Content } from "../chakra-ui"

// chakra
export const MotionBox = motion.custom(Box)
export const MotionButton = motion.custom(Button)
export const MotionFlex = motion.custom(Flex)
export const MotionHeading = motion.custom(Heading)
export const PseudoMotionBox = motion.custom(PseudoBox)
export const MotionText = motion.custom(Text)

// custom
export const MotionContent = motion.custom(Content)
