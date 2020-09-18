import React from "react"
import PropTypes from "prop-types"
import {
  Box,
  CSSReset,
  ThemeProvider,
  ColorModeProvider,
  useColorMode,
} from "@chakra-ui/core"

import theme from "../theme"
import { Global } from "./global"

import SEO from "../../components/seo"
import { Header, Footer, ModeToggle } from "../../components"

import useSiteMetadata from "../../hooks/use-site-metadata"

import "../../styles/main.scss"

const DefaultLayout = ({
  header = true,
  fixHeader,
  topbar = false,
  shapes = true,
  pageTagline,
  children,
  ...rest
}) => {
  const { colorMode } = useColorMode()
  const site = useSiteMetadata()
  const { title, brandColors } = site

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
      <SEO siteTitle={title} siteTagline={pageTagline} />
      <ThemeProvider theme={themeUpdate}>
        <CSSReset />
        <ColorModeProvider>
          <ModeToggle />
          <Box
            id="content-wrapper"
            color={`mode.${colorMode}.text`}
            fontFamily="body"
          >
            {header && <Header siteTitle={title} siteTagline={pageTagline} />}
            <Box as="main" {...rest} my="4rem">
              {children}
            </Box>
          </Box>
          <Footer
            siteTitle={title}
            // siteTagline={pageTagline}
          />
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
