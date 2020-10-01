import React, { useRef } from "react"
import { Box } from "@chakra-ui/core"
import { useViewportSpy } from "beautiful-react-hooks"

export const ViewportSpy = ({ options, debug, children }) => {
  const ref = useRef()
  const isVisible = useViewportSpy(ref, { threshold: 0.3, ...options })
  return (
    <>
      <Box ref={ref} py={6}>
        {children}
      </Box>
      {debug && (
        <Box position="fixed" top={"6em"} right={2} my={5}>
          isVisble: {isVisible ? "yes" : "no"}
        </Box>
      )}
    </>
  )
}

// export const PresenceBox = ({ options, debug, presenceProps, children }) => {}
