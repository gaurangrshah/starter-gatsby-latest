import React from "react"
import { IconButton, useColorMode } from "@chakra-ui/core"

export const ModeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode()

  const toggle = () => toggleColorMode()

  return (
    <IconButton
      size="lg"
      position="fixed"
      bottom="10em"
      right="4"
      onClick={toggle}
      color={`mode.${"light"}.text`}
      border={`1px solid`}
      borderColor={`mode.${"light"}.text`}
      aria-label="toggle dark mode"
      icon={colorMode === "light" ? "moon" : "sun"}
      zIndex={10}
    />
  )
}
