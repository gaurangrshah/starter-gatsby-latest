import React from "react"
import { Box, Heading, Image } from "@chakra-ui/core"
import { Presence } from "./presence"
import { MotionBox, motionDefaults } from "../../motion"
import { Logo } from "../structure"

import LetterMark from "../../../images/logo-icon.svg"

export const MotionBrand = () => {
  return (
    <Presence
      type="SlideFade"
      initialOffset="200px"
      timeout={1500}
      config={{
        presence: {
          initialInView: false,
          /* change to true for heros, and banner animations */
        },
        container: {
          bg: true,
          shadow: true,
          minH: "30vh",
          my: "80vh",
          py: "10%",
        },
      }}
    >
      <Box
        sx={{
          mx: "auto",
          w: "300px",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        <MotionBox
          key="motion-testbox"
          {...motionDefaults}
          initial={{ opacity: 0, x: "0%" }}
          animate={{
            opacity: 1,
            x: "30%",
            transition: { duration: 0.9, delay: 1 },
          }}
          maxW="100px"
          zIndex={10}
        >
          <Image src={LetterMark} w="" />
        </MotionBox>
        <MotionBox
          key="motion-testbox2"
          {...motionDefaults}
          initial={{ opacity: 0, x: "0%" }}
          animate={{
            opacity: 1,
            x: "10%",
            transition: { duration: 0.4, delay: 2 },
          }}
          maxW="300px"
          display="flex"
          alignItems="center"
        >
          <Heading
            as="h1"
            m={0}
            mx="auto"
            color="white"
            textAlign="center"
            fontSize={["2xl", null, null, "4xl"]}
          >
            <Logo siteTitle={"Penn Star"} />
          </Heading>
        </MotionBox>
      </Box>
    </Presence>
  )
}
