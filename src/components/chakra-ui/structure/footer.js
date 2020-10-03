import React from "react"
import { Link } from "gatsby"
import { Box, useStyleConfig } from "@chakra-ui/core"

import { ContentLogic } from "../layout"
import { SocialLinks } from "./social-links"
import { component } from "../components"

export const Footer = ({ siteTitle, siteTagline, ...rest }) => {
  const styles = useStyleConfig("footer", {})

  return (
    <ContentLogic
      as="footer"
      bg={`brand`}
      color={`background`}
      shadow={"maxtop"}
      {...rest}
    >
      <Box position="relative" sx={styles}>
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
    </ContentLogic>
  )
}
