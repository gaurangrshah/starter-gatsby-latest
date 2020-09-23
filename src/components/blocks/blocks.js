import React from "react"
import { Box, Divider, Heading, Text } from "@chakra-ui/core"

import { textShadow, LinkWrapper, Row } from "../chakra-ui"
import { isBoolean, isTruthy, truncateOnWord, doesInclude } from "../../utils"

export const headingDefaults = {
  fontSize: ["2xl", null, null, "4xl"],
  fontWeight: "700",
  lineHeight: 2,
  color: "blue",
}

const DEFAULT_ORDER = [0, 1, 2, 3, 6, 10] // [lead, heading, tagline, misc, content, link]

export const borderBottom = (
  bool,
  color = "white",
  settings = `1px solid ${color}`
) =>
  bool && {
    borderBottom: settings,
    pb: 6,
  }

export const BlockText = ({
  text,
  order,
  type = undefined,
  children,
  border,
  ...rest
}) => (
  <Text
    className={type}
    order={order}
    color="inherit"
    children={text}
    {...borderBottom(border)}
    lineHeight="1.75em"
    {...rest}
  />
)

export const TextContent = ({ content, ...rest }) =>
  content?.length
    ? content.map((textContent, i) => (
        <Text
          as={Box}
          key={i}
          py={2}
          color="inherit"
          lineHeight="1.75em"
          {...rest}
        >
          {truncateOnWord(textContent.content.toString(), 70)}
        </Text>
      ))
    : null

export const Block = ({
  order = DEFAULT_ORDER,
  content = [{}, {}],
  image = {},
  link = {},
  text = [{}, {}],
  config = {},
  shadow,
  children,
  ...rest
}) => {
  return (
    <Row flexDirection="column" color={`inherit`} py={6} {...rest}>
      {text.map((txt, i) => {
        if (txt.type !== "heading") {
          return (
            <BlockText
              key={i}
              order={order[i]}
              type={txt.type}
              text={txt.text}
              shadow={shadow && isBoolean(shadow) ? textShadow.light : shadow}
              {...isTruthy(config[txt.type])}
            />
          )
        } else {
          return (
            <Heading
              key={i}
              as="h2"
              order={order[1]}
              {...headingDefaults}
              {...isTruthy(config[txt.type])}
            >
              {txt.text}
            </Heading>
          )
        }
      })}
      {content && (
        <TextContent
          order={order[4]}
          content={content}
          {...isTruthy(config.content)}
        />
      )}
      {children}
      {link && <LinkWrapper order={order[5]} {...link} {...config.link} />}
    </Row>
  )
}
