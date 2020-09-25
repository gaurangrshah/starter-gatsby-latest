import React from "react"
import { Box, Divider, Heading, Text } from "@chakra-ui/core"

import { textShadow, LinkWrapper, Row } from "../chakra-ui"
import { isBoolean, isTruthy, truncateOnWord, doesInclude } from "../../utils"

export const headingDefaults = {
  fontSize: ["xl", "2xl", null, "4xl"],
  fontWeight: "700",
  lineHeight: 2,
  color: "blue",
}

const DEFAULT_ORDER = [0, 1, 2, 3, 6, 10] // [lead, heading, tagline, misc, content, link]

export const borderBottom = (
  bool,
  color = "red",
  borderWidth = "1px",
  settings = `${borderWidth} solid ${color}`
) =>
  bool && {
    borderBottom: settings,
    pb: 3,
  }

export const BlockText = ({
  text,
  order,
  type = undefined,
  children,
  border,
  borderColor,
  borderWidth,
  ...rest
}) => (
  <Text
    lineHeight="1.75rem"
    className={type}
    order={order}
    children={text}
    {...borderBottom(
      border,
      borderColor ? borderColor : "white",
      borderWidth ? borderWidth : "1px"
    )}
    {...rest}
  />
)

export const TextContent = ({ content, truncate = false, ...rest }) =>
  content?.length
    ? content.map((textContent, i) => (
        <Text as={Box} key={i} py={2} lineHeight="1.75rem" {...rest}>
          {truncate
            ? truncateOnWord(
                textContent.content.toString(),
                isBoolean(truncate) ? 70 : truncate
              )
            : textContent.content}
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
  truncate = false,
  shadow,
  children,
  ...rest
}) => {
  return (
    <Row className="block-row-column" flexDirection="column" py={6} {...rest}>
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
          truncate={truncate}
          {...isTruthy(config.content)}
        />
      )}
      {children}
      {link && <LinkWrapper order={order[5]} {...link} {...config.link} />}
    </Row>
  )
}
