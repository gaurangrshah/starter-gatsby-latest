import React, { useState } from "react"
import PropTypes from "prop-types"
import {
  Box,
  Text,
  CSSReset,
  ThemeProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/core"

import theme from "../theme"
import { Global } from "./global"
import { ModeToggle } from "../mode-toggle"

import SEO from "../../components/seo"
// import { Header } from "../components/layout"
// import { Footer } from "../components"

import useSiteMetadata from "../../hooks/use-site-metadata"

import "../../styles/main.scss"

const DefaultLayout = ({
  header = true,
  fixHeader,
  topbar = false,
  pageTitle = "Page",
  shapes = true,
  pageTagline,
  children,
  ...rest
}) => {
  // const [isNavOpen, setIsNavOpen] = useState(false)
  // const toggleIsNavOpen = () => setIsNavOpen(oldState => !oldState)
  const { colorMode } = useColorMode()
  const site = useSiteMetadata()
  const { brandColors } = site

  const themeUpdate = {
    ...theme,
    colors: {
      ...theme.colors,
      brand: {
        ...theme.colors.brand,
        ...brandColors, // : { primary, secondary }
      },
    },
  }

  return (
    <>
      <Global />
      <SEO siteTitle={pageTitle} />
      <ThemeProvider theme={themeUpdate}>
        <CSSReset />
        <ColorModeProvider>
          <Box
            id="content-wrapper"
            color={`mode.${colorMode}.text`}
            fontFamily="body"
          >
            {children}
            <Text>Test</Text>
            <ModeToggle />
            {/* {header && <Header siteTitle={title} siteTagline={tagline} />}

            <Box as="main" {...rest}>

            </Box>
          <Footer siteTitle={title} siteTagline={tagline} /> */}
          </Box>
          HOWDY
        </ColorModeProvider>
      </ThemeProvider>
    </>
  )
}

DefaultLayout.propTypes = {
  header: PropTypes.bool,
  bg: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
