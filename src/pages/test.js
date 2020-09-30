import React from "react"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import theme from "../gatsby-plugin-chakra-ui/theme"

import {
  Breakpoints,
  ZIndices,
  Sizes,
  Space,
  Colors,
  Shadows,
  Gradients,
  gradients,
} from "../components/chakra-ui"

import { SidebarContextWrapper } from "../components/"

const TestPage = () => {
  const { breakpoints, zIndices, sizes, space, colors, shadows } = theme
  return (
    <DefaultLayout
      seo={{ siteTitle: "test page", siteTagline: "testing ground" }}
    >
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
      </SidebarContextWrapper>
    </DefaultLayout>
  )
}

export default TestPage
