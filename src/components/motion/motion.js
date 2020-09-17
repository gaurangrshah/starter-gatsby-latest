import React from "react"
import { Box, Button, Heading, Text, PseudoBox } from "@chakra-ui/core"
import { AnimatePresence, motion } from "framer-motion"

import { Content } from "../chakra-ui"

export const MotionBox = motion.custom(Box)
export const MotionButton = motion.custom(Button)
export const PseudoMotionBox = motion.custom(PseudoBox)
export const MotionHeading = motion.custom(Heading)
export const MotionText = motion.custom(Text)
export const MotionContent = motion.custom(Content)
