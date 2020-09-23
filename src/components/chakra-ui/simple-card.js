import React from "react"
import { Box } from "@chakra-ui/core"

import { box } from "./components"
import { LinkWrapper } from "./link-wrapper"
import { Content } from "./layout"
import {
  headingDefaults,
  BlockText,
  borderBottom,
  TextContent,
} from "../blocks"
import { isTruthy } from "../../utils"

export const SimpleCard = ({ icon, text, content, link, ...rest }) => {
  const isHeading = text[0].type === "heading"
  return (
    <LinkWrapper variant="unstyled" {...link}>
      <Content rounded shadow="maxbttm" bg="bg4" px={4} py={8} {...rest}>
        {icon && (
          <Box as="i" color="inherit" className={`fas fa-${icon} fa-4x`} />
        )}
        <BlockText
          as={isHeading ? "h3" : "p"}
          text={text[0].text}
          {...isTruthy(isHeading, headingDefaults)}
          fontSize="md"
          {...borderBottom(true)}
        />
        <TextContent fontSize={"sm"} w="85%" mx="auto" content={content} />
      </Content>
    </LinkWrapper>
  )
}
