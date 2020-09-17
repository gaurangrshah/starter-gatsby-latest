import React from "react"
import { Link } from "gatsby"
import { Box, useColorMode } from "@chakra-ui/core"
// import { Content, Row } from "../elements"
import { SocialLinks } from "./social-links"
import { box, flex, component, test } from "../utils"

export const Footer = ({ siteTitle, siteTagline, ...rest }) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      as="footer"
      bg={`mode.${colorMode}.brand`}
      color={`mode.${colorMode}.textAlt`}
      shadow={"maxbttm"}
      {...rest}
    >
      <Box position="relative" {...component.footer}>
        <Box
          width={["100%", null, null, "80%"]}
          fontSize={["10px", "sm"]}
          order={[1, null, null, 0]}
        >
          &copy; {new Date().getFullYear()}{" "}
          <Link as="span" to="/">
            {`${siteTitle} ${siteTagline && siteTagline}`}
          </Link>{" "}
          - All Rights Reserved.
        </Box>
        <Box
          w={["100%", null, null, "20%"]}
          order={[0, null, null, 1]}
          textAlign={["center", null, null, "right"]}
        >
          <SocialLinks />
        </Box>
      </Box>
    </Box>
  )
}
