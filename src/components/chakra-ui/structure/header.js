import React from "react"
import PropTypes from "prop-types"
import { Flex, Heading, useColorMode } from "@chakra-ui/core"

import { Nav } from "./nav"
import { Logo } from "./logo"
import { Content } from "../layout"
import { component } from "../components"

export const Header = ({ siteTitle, siteTagline, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Content as="header" bg={`brand`} shadow="minbttm">
      <Flex color={`mode.${colorMode}.background`} {...component?.header}>
        <Heading
          as="h1"
          m={0}
          color="inherit"
          fontSize={["2xl", null, null, "3xl"]}
          flex={0}
          minW="20%"
        >
          <Logo siteTitle={siteTitle} siteTagline={siteTagline} />
        </Heading>
        <Nav siteTitle={siteTitle} siteTagline={siteTagline} />
      </Flex>
    </Content>
  )
}

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}
