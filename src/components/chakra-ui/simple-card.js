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
import { BGIcon } from "../bg-icon"

export const SimpleCard = ({
  icon,
  text,
  content,
  link,
  config,
  children,
  ...rest
}) => {
  const isHeading = text && text[0]?.type === "heading"
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
        {icon ? (
          <BGIcon
            bg="lightblue"
            icon="stop"
            size="2x"
            config={{ icon: { color: "inerit" } }}
          />
        ) : null}
        {text?.length ? (
          <BlockText
            as={isHeading ? "h3" : "p"}
            text={text[0].text}
            color="lightblue"
            {...isTruthy(isHeading, headingDefaults)}
            fontSize="md"
            {...borderBottom(config?.text?.borderBottom)}
            {...config?.text}
          />
        ) : null}
        {content?.length ? (
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
        ) : null}
        {link?.label ? (
          <LinkWrapper
            isDefault={false}
            isEnabled={false}
            isMoreLink
            fontSize="xs"
            ml="auto"
            {...link}
          />
        ) : null}
        {children}
      </Content>
    </LinkWrapper>
  )
}