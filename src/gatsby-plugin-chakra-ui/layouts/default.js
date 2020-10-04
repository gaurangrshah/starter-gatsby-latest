import React from "react"
import PropTypes from "prop-types"
import { Box, ChakraProvider, useColorMode } from "@chakra-ui/core"
// import { merge } from "@chakra-ui/utils"

import theme from "../theme"
import { Global } from "./global"

import SEO from "../../components/seo"
import {
  BaseContainer,
  Header,
  Footer,
  ModeToggle,
  Sidebar,
  Sink,
  PreFooter,
} from "../../components"

import useSiteMetadata from "../../hooks/use-site-metadata"

// import { isDev } from "../../utils"
import { PanelProvider } from "../../contexts/panel-context"
import { isClient } from "../../utils/tools/tools"

import "../../styles/main.scss"

const DefaultLayout = ({
  header = true,
  prefooter = true,
  seo,
  allowPanelUpdate = false,
  children,
  ...rest
}) => {
  const { colorMode } = useColorMode()
  const site = useSiteMetadata()
  const {
    title,
    // tagline,
    brandColors,
  } = site

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

  isClient && console.log("⭕️themeUpdate", themeUpdate)

  return (
    <>
      <Global />
      <SEO seo={{ siteTitle: title, ...seo }} />
      <ChakraProvider resetCSS theme={themeUpdate}>
        <ModeToggle />
        <PanelProvider {...{ allowPanelUpdate }}>
          <Sidebar>
            <Sink />
          </Sidebar>
          <Box
            id="content-wrapper"
            color={`mode.${colorMode}.text`}
            fontFamily="body"
          >
            {header && (
              <Header siteTitle={title} siteTagline={seo?.siteTagline} />
            )}
            <Box as="main" {...rest} mt={10}>
              {children}
            </Box>
          </Box>
        </PanelProvider>
        {prefooter && (
          <BaseContainer
            className="pre-footer"
            fluid
            bg="bg"
            py={12}
            mb={[12, null, 0]}
          >
            <PreFooter />
          </BaseContainer>
        )}
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
