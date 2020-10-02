import React from "react"

import { Presence } from "."
import { Fade, ScaleFade, Slide, SlideFade } from "@chakra-ui/transition"

import { BaseContainer } from "../layout/containers/containers"
import { Box } from "@chakra-ui/core"
const boxy = {
  id: "box-check",
  w: "300px",
  h: "200px",
  minH: "150px",
  bg: "mode.light.bg3",
  my: 2,
}
export const Transitions = () => {
  return (
    <BaseContainer color="red" mt={6} py={"5em"} overflow="hidden" my={"120vh"}>
      {/* 🎉 completed */}
      <Presence
        config={{ rootMargin: "-50px", threshold: [0.4, 0.8], delay: 100 }}
      >
        <ScaleFade initialScale={0.2} timeout={2000}>
          {styles => (
            <Box {...boxy} style={{ ...styles }} children={"scale-fade"} />
          )}
        </ScaleFade>
      </Presence>

      {/* 🎉 completed */}
      <Presence config={{ rootMargin: "-50px", threshold: [0.2, 0.9] }}>
        <Fade timeout={2000}>
          {styles => <Box {...boxy} style={{ ...styles }} children={"fade"} />}
        </Fade>
      </Presence>
      {/* 🎉 completed */}
      <Presence config={{ rootMargin: "-80px", threshold: [0.4, 0.9] }}>
        <Slide placement="left" timeout={2000}>
          {styles => (
            <Box {...boxy}>
              <Box
                style={{ ...styles, position: "static" }}
                children={"slide-left"}
              />
            </Box>
          )}
        </Slide>
      </Presence>
      {/* 🎉 completed */}
      <Presence>
        <SlideFade initialOffset="200px" timeout={2000}>
          {styles => (
            <Box {...boxy} style={{ ...styles }} children={"slide-fade"} />
          )}
        </SlideFade>
      </Presence>
    </BaseContainer>
  )
}
