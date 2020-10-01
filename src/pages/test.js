import React from "react"
import { Box } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"
import theme from "../gatsby-plugin-chakra-ui/theme"

import {
  BaseContainer,
  Breakpoints,
  ZIndices,
  Sizes,
  Space,
  Colors,
  Shadows,
  Gradients,
  gradients,
  SidebarContextWrapper,
} from "../components/chakra-ui"
import { TrackingBox } from "../components"
import { shortid } from "../utils"

export const TrackingBox2 = ({
  presenceProps,
  show,
  once = true,
  variant = "fade-right",
  rootMargin = "50px 0px",
  children,
  ...rest
}) => {
  return (
    <TrackingBox
      key={`tracker-${shortid()}`}
      variant={"fade-right"}
      // presenceProps={{ initial: false }}
      once
    >
      {children}
    </TrackingBox>
  )
}

const TestPage = () => {
  const { breakpoints, zIndices, sizes, space, colors, shadows } = theme

  return (
    <DefaultLayout
      seo={{ siteTitle: "test page", siteTagline: "testing ground" }}
    >
      <BaseContainer
        minH="100vh"
        color="red"
        mt={6}
        pt={"20em"}
        border="4px solid red"
      >
        <Entrances />
      </BaseContainer>
      <SidebarContextWrapper
        id="testPage"
        allowSidebarUpdate
        kidProps={{ border: "3px solid orange" }}
      >
        <Breakpoints breakpoints={breakpoints} />
        <ZIndices zIndices={zIndices} />
        <Sizes sizes={sizes} />
        <Space space={space} />
        <Colors colors={colors} />
        <Shadows shadows={shadows} />
        <Gradients gradients={gradients} />
        <Entrances />
      </SidebarContextWrapper>
    </DefaultLayout>
  )
}

export default TestPage

const Entrances = ({ children, ...rest }) => {
  const variants = [
    "fade-up",
    "fade-right",
    "fade-down",
    "fade-left",
    "fade-up",
    "fade-right",
    "fade-down",
    "fade-left",
  ]
  return variants.map((variant, i) => (
    <TrackingBox
      key={`tracker${i}-${shortid()}`}
      show
      variant={variants[i]}
      once
      {...rest}
    >
      <Box {...box} children={variant[i]} />
    </TrackingBox>
  ))
}

const box = {
  id: "box-check",
  w: "300px",
  h: "300px",
  background: "mode.light.bg3",
  border: "1px solid red",
  children: "x",
  my: 12,
}
