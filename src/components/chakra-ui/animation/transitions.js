import React from "react"

import { Presence } from "./presence"
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
      {/* <Presence debug config={{ rootMargin: "-80px", threshold: [0.4, 0.9] }}>
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
      </Presence> */}
      <Presence
        // once
        type="SlideFade"
        initialOffset="200px"
        timeout={2000}
        config={{
          container: { bg: true, shadow: true, minH: "20vh" },
        }}
      >
        <Box {...boxy} children={"fade"} />
      </Presence>
      <Presence
        // once
        type="Fade"
        timeout={2000}
        config={{
          presence: {
            rootMargin: "-50px",
            threshold: [0.2, 0.9],
          },
          container: { bg: true, shadow: true, minH: "20vh" },
        }}
      >
        <Box {...boxy} children={"fade"} />
      </Presence>
      <Presence
        // once
        type="ScaleFade"
        timeout={1000}
        initialScale={0.2}
        config={{
          presence: {
            rootMargin: "-150px",
            threshold: [0.2],
            // delay: 100,
            initialInView: false,
          },
          container: { bg: true, shadow: true, minH: "20vh" },
        }}
      >
        <Box {...boxy} children={"scale-fade"} />
      </Presence>
    </BaseContainer>
  )
}
