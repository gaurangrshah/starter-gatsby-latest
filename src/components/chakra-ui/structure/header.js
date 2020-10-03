import React from "react"
import PropTypes from "prop-types"
import { Flex, Heading, useColorMode, useStyleConfig } from "@chakra-ui/core"

import { Nav } from "./nav"
import { Logo } from "./logo"
import { ContentLogic } from "../layout"
import { component } from "../components"

export const Header = ({ siteTitle, siteTagline, ...rest }) => {
  const { colorMode } = useColorMode()
  const config = { variant: "base" }
  const styles = useStyleConfig("header", config)
  // console.log("⭕️ basestyles", styles)
  return (
    <ContentLogic as="header" bg={`brand`} shadow="minbttm">
      <Flex color={`mode.${colorMode}.background`} sx={styles}>
        <Heading
          as="h1"
          m={0}
          color="inherit"
          fontSize={["2xl", null, null, "3xl"]}
          pl={[4, null, null, null, 0]}
          flex={0}
          minW="25%"
        >
          <Logo siteTitle={siteTitle} siteTagline={siteTagline} />
        </Heading>
        <Nav siteTitle={siteTitle} siteTagline={siteTagline} />
      </Flex>
    </ContentLogic>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
  siteTagline: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
  siteTagline: ``,
}
