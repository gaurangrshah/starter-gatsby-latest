import React from "react"
import PropTypes from "prop-types"
import {
  Box,
  CSSReset,
  ChakraProvider,
  // ColorModeProvider,
  useColorMode,
} from "@chakra-ui/core"
import { merge } from "@chakra-ui/utils"

import theme from "../theme"
import { Global } from "./global"

import SEO from "../../components/seo"
import {
  BaseContainer2,
  Header,
  Footer,
  ModeToggle,
  Sidebar,
  PreFooter,
} from "../../components"

import useSiteMetadata from "../../hooks/use-site-metadata"

import "../../styles/main.scss"

import { isDev } from "../../utils"

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
      <ChakraProvider resetCSS theme={themeUpdate}>
        {/* <CSSReset /> */}
        {/* <ColorModeProvider> */}
        {isDev && <Sidebar />}
        <ModeToggle />
        <Box
          id="content-wrapper"
          color={`mode.${colorMode}.text`}
          fontFamily="body"
        >
          {header && <Header siteTitle={title} siteTagline={pageTagline} />}
          <Box as="main" {...rest} mt="5rem">
            {children}
          </Box>
        </Box>
        <BaseContainer2 fluid bg="bg" py={12} mb={[12, null, 0]}>
          <PreFooter />
        </BaseContainer2>
        <Footer siteTitle={title.toUpperCase()} siteTagline={""} />
        {/* </ColorModeProvider> */}
      </ChakraProvider>
    </>
  )
}

DefaultLayout.propTypes = {
  header: PropTypes.bool,
  fixHeader: PropTypes.bool,
  topBar: PropTypes.bool,
  shapes: PropTypes.bool,
  pageTagline: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
