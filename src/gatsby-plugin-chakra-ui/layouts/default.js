import React from "react"
import PropTypes from "prop-types"
import { Box, ChakraProvider, useColorMode } from "@chakra-ui/core"
// import { merge } from "@chakra-ui/utils"
import { SlideFade } from "@chakra-ui/transition"

import theme from "../theme"
import { Global } from "./global"

import SEO from "../../components/seo"
import {
  Header,
  Footer,
  ModeToggle,
  Sidebar,
  PreFooter,
} from "../../components"

import useSiteMetadata from "../../hooks/use-site-metadata"

// import { isDev } from "../../utils"
import { PanelContext, PanelProvider } from "../../contexts/panel-context"
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
          <Sidebar context={PanelContext} />
          <Box
            id="content-wrapper"
            color={`mode.${colorMode}.text`}
            fontFamily="body"
          >
            {header ? (
              <SlideFade
                // placement="top"
                initialOffset="-20px"
                timeout={800}
                in={true}
              >
                {styles => (
                  <Header
                    siteTitle={title}
                    siteTagline={seo?.siteTagline}
                    sx={styles}
                  />
                )}
              </SlideFade>
            ) : null}
            <Box as="main" {...rest} mt={10}>
              {children}
            </Box>
          </Box>
        </PanelProvider>
        {prefooter ? <PreFooter /> : null}

        <SlideFade initialOffset="20px" timeout={2000} in={true}>
          {styles => (
            <Footer
              siteTitle={title}
              siteTagline={seo?.siteTagline}
              sx={styles}
            />
          )}
        </SlideFade>
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
