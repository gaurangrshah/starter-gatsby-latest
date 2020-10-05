import React from "react"
import { theme } from "@chakra-ui/core"
import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  MotionBrand,
  MotionEntrances,
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

const tabs = [
  "breakpoints",
  "zIndices",
  "sizes",
  "space",
  "colors",
  "shadows",
  "gradients",
  "entrances",
  "motion-entrances",
  "compositions",
]
const TestPage = () => {
  const { breakpoints, zIndices, sizes, space, colors, shadows } = theme
  return (
    <DefaultLayout
      seo={{ siteTitle: "test page", siteTagline: "testing ground" }}
    >
      <SidebarContextWrapper id="testPage" allowSidebarUpdate list={tabs}>
        <Breakpoints breakpoints={breakpoints} />
        <ZIndices zIndices={zIndices} />
        <Sizes sizes={sizes} />
        <Space space={space} />
        <Colors colors={colors} />
        <Shadows shadows={shadows} />
        <Gradients gradients={gradients} />
        <Transitions />
        <MotionEntrances />
        <MotionBrand />
      </SidebarContextWrapper>
    </DefaultLayout>
  )
}

export default TestPage
