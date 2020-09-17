import React from "react"
import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Flex, Heading, useColorMode } from "@chakra-ui/core"

import { Nav } from "./nav"
import { Content } from "./chakra-ui"
import { component } from "../utils"

export const Header = ({ siteTitle, siteTagline, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Content
      as="header"
      bg={`brand`}
      color={`mode.${colorMode}.bg`}
      shadow="minbttm"
    >
      <Flex {...component.header} color={`mode.${"light"}.navLink`}>
        <Heading
          as="h1"
          m={0}
          color="inherit"
          fontSize={["2xl", null, null, "3xl"]}
          flex={0}
        >
          <Link
            to="/"
            style={{
              color: `inherit`,
            }}
          >
            {siteTitle}
            {siteTagline}
          </Link>
        </Heading>

        <Nav />
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
