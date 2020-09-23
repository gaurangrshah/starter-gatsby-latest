import React from "react"
import { Box, Button } from "@chakra-ui/core"

import { box } from "./components"
import { LinkWrapper } from "./link-wrapper"
import { Content, Row } from "./layout"

import {
  headingDefaults,
  BlockText,
  borderBottom,
  TextContent,
} from "../blocks"
import { isTruthy } from "../../utils"

export const SimpleCard = ({ icon, text, content, link, config, ...rest }) => {
  const isHeading = text[0].type === "heading"
  return (
    <LinkWrapper as={Box} variant="unstyled" {...link} {...config?.link}>
      <Content
        rounded
        bg="bg4"
        shadow="maxbttm"
        px={4}
        pt={3}
        pb={8}
        display="flex"
        flexDirection="column"
        {...rest}
      >
        {icon && (
          <BGIcon
            bg="lightblue"
            icon="stop"
            size="2x"
            config={{ icon: { color: "inerit" } }}
          />
        )}
        <BlockText
          as={isHeading ? "h3" : "p"}
          text={text[0].text}
          color="lightblue"
          {...isTruthy(isHeading, headingDefaults)}
          fontSize="md"
          {...borderBottom(config?.text?.borderBottom)}
          {...config?.text}
        />
        <TextContent
          fontWeight={500}
          fontSize={"xs"}
          w="85%"
          mx="auto"
          color="inherit"
          truncate
          content={content}
          {...config?.content}
          whiteSpace="normal"
        />
        {link?.label && (
          <LinkWrapper
            isDefault={false}
            isEnabled={false}
            isMoreLink
            fontSize="xs"
            ml="auto"
            {...link}
          />
        )}
      </Content>
    </LinkWrapper>
  )
}

const BGIcon = ({ bg = "yellow", icon, children, config, ...rest }) => (
  <Box
    py={"0.25rem"}
    px={"0.5rem"}
    mr="auto"
    mb="2"
    alignSelf="flex-start"
    rounded="5px"
    {...{ bg }}
    {...rest}
  >
    <Box
      as="i"
      color="inherit"
      className={`fas fa-${icon} fa-${config.icon.size || "4x"}`}
      mx="auto"
      style={{ margin: "0 auto", ...config?.icon }}
    />
  </Box>
)
