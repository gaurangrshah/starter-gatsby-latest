import React from "react"
import PropTypes from "prop-types"
import { Box, ChakraProvider, useColorMode } from "@chakra-ui/core"
import { merge } from "@chakra-ui/utils"

import theme from "../theme"
import { Global } from "./global"

import SEO from "../../components/seo"
import {
  BaseContainer,
  Header,
  Footer,
  ModeToggle,
  Sidebar,
  PreFooter,
} from "../../components"

import useSiteMetadata from "../../hooks/use-site-metadata"

import "../../styles/main.scss"

import { isDev } from "../../utils"

const DefaultLayout = ({ header = true, pageTagline, children, ...rest }) => {
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

  console.log("⭕️themeUpdate", themeUpdate)

  return (
    <>
      <Global />
      <SEO siteTitle={title} siteTagline={pageTagline} />
      <ChakraProvider resetCSS theme={themeUpdate}>
        <ModeToggle />
        <Box
          id="content-wrapper"
          color={`mode.${colorMode}.text`}
          fontFamily="body"
        >
          {header && <Header siteTitle={title} siteTagline={pageTagline} />}
          <Box as="main" {...rest} mt="5rem">
            {children}
            <Sidebar />
          </Box>
        </Box>
        <BaseContainer fluid bg="bg" py={12} mb={[12, null, 0]}>
          <PreFooter />
        </BaseContainer>
        <Footer siteTitle={title.toUpperCase()} siteTagline={""} />
      </ChakraProvider>
    </>
  )
}

DefaultLayout.propTypes = {
  header: PropTypes.bool,
  pageTagline: PropTypes.string,
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
