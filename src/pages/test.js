import React from "react"
import { Box, theme } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  component,
  BaseContainer,
  Breakpoints,
  ZIndices,
  Sizes,
  Space,
  Colors,
  Shadows,
  Gradients,
  Transitions,
  gradients,
  SidebarContextWrapper,
} from "../components/chakra-ui"
import { TrackingBox, Wrapper, MotionBox } from "../components"

const boxy = {
  id: "box-check",
  w: "300px",
  h: "200px",
  minH: "150px",
  bg: "mode.light.bg3",
  my: 2,
}
// const motionSettings = {
//   initial: "hidden",
//   animate: "visible",
//   // exit: "hidden",
// }

// const transition = {
//   duration: 0.4,
//   delay: 0.1,
// }

// const transitionVisible = {
//   ...transition,
//   staggerChildren: 0.3,
//   when: "beforeChildren",
// }
// const transitionHidden = {
//   ...transition,
//   when: "afterChildren",
// }

// const entrances = {
//   "fade-up": {
//     hidden: { opacity: 0, y: 300, transition: transitionVisible },
//     visible: { opacity: 1, y: 0, transition: transitionHidden },
//     // exit: { opacity: 0, y: 300,...transitionVisible, transition },
//   },
//   "fade-down": {
//     hidden: { opacity: 0, y: -300, transition: transitionVisible },
//     visible: { opacity: 1, y: 0, transition: transitionHidden },
//     // exit: { opacity: 0, y: 300,...transitionVisible, transition },
//   },
//   "fade-left": {
//     hidden: { opacity: 0, x: -300, transition: transitionVisible },
//     visible: { opacity: 1, x: 0, transition: transitionHidden },
//     // exit: { opacity: 0, y: 300,...transitionVisible, transition },
//   },
//   "fade-right": {
//     hidden: { opacity: 0, x: 300, transition: transitionVisible },
//     visible: { opacity: 1, x: 0, transition: transitionHidden },
//     // exit: { opacity: 0, y: 300, transition },
//   },
// }

const VARIANTS = [
  "fade-up",
  "fade-right",
  // "fade-down",
  "fade-left",
  "fade-up",
  "fade-right",
  // "fade-down",
  "fade-left",
]

const Entrances = ({ children, ...rest }) => {
  return VARIANTS.map((variant, i) => (
    <TrackingBox key={i} show once exitBeforeEnter variant={variant} {...rest}>
      <Box {...component?.flex.columnCenter} {...boxy} children={variant} />
    </TrackingBox>
  ))
}

const TestPage = () => {
  const { breakpoints, zIndices, sizes, space, colors, shadows } = theme
  console.log(sizes)
  return (
    <DefaultLayout
      seo={{ siteTitle: "test page", siteTagline: "testing ground" }}
    >
      {/* <BaseContainer
        color="red"
        mt={6}
        py={"5em"}
        border="4px solid red"
        overflow="hidden"
      >
        <Entrances />
      </BaseContainer> */}

      {/* <Wrapper
        minH="60em"
        color="red"
        my={"10em"}
        py={"5em"}
        border="4px solid green"
        overflow="hidden"
        show
      >
        <MotionBox
          key={`presence-${shortid()}`}
          {...boxy}
          {...motionSettings}
          variants={entrances["fade-up"]}
          {...transition}
        />
      </Wrapper>
      <Wrapper
        minH="60em"
        color="red"
        my={"10em"}
        py={"5em"}
        border="4px solid green"
        overflow="hidden"
        show
      >
        <MotionBox
          key={`presence-${shortid()}`}
          {...boxy}
          {...motionSettings}
          variants={entrances["fade-up"]}
          {...transition}
        />
      </Wrapper> */}
      <SidebarContextWrapper id="testPage" allowSidebarUpdate>
        <Breakpoints breakpoints={breakpoints} />
        <ZIndices zIndices={zIndices} />
        <Sizes sizes={sizes} />
        <Space space={space} />
        <Colors colors={colors} />
        <Shadows shadows={shadows} />
        <Gradients gradients={gradients} />
        <Transitions />
        <Entrances />
      </SidebarContextWrapper>
    </DefaultLayout>
  )
}

export default TestPage
