import React from "react"
import { Box, Divider, Heading, Text } from "@chakra-ui/core"

import { Row } from "../chakra-ui"
import { doesInclude } from "../../utils"

export const headingDefaults = {
  fontSize: ["2xl", null, null, "3xl"],
  fontWeight: "700",
  lineHeight: 2,
}

export const Block = ({
  lead,
  leadProps,
  heading,
  headingProps,
  tagline,
  taglineProps,
  content,
  contentProps,
  childrenProps,
  topPadding,
  padSpacing = 8,
  children,
  ...rest
}) => {
  return (
    <Row flexDirection="column" color={`inherit`} py={6} {...rest}>
      {lead && (
        <Text as="small" pb={4} {...leadProps}>
          {lead}
        </Text>
      )}
      {heading && (
        <Heading
          as="h2"
          color={`heading`}
          {...headingDefaults}
          {...headingProps}
        >
          {heading}
        </Heading>
      )}
      {tagline && (
        <>
          <Text py={4} {...taglineProps}>
            {tagline}
          </Text>
          <Divider mb={12} />
        </>
      )}
      {content?.length &&
        content.map((item, i) => (
          <Text
            key={i}
            lineHeight={"1.5em"}
            pt={topPadding?.length && doesInclude(topPadding, i) && padSpacing}
            {...contentProps}
          >
            {item}
          </Text>
        ))}
      <Box py={6} color="inherit" {...childrenProps}>
        {children}
      </Box>
    </Row>
  )
}
