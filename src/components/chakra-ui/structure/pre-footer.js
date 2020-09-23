import React from "react"

import { Box, Heading, Stack, Text } from "@chakra-ui/core"
import { Content, Row } from "../layout"
import { LinkWrapper } from "../link-wrapper"
import { borderBottom, TextContent } from "../../blocks"
import { Logo } from "./logo"

export const PreFooter = ({ preFooter }) => {
  console.log(preFooter?.node?.block)
  const {
    email,
    phone,
    streetAddress,
    suite,
    city,
    state,
    zip,
  } = preFooter?.node?.block?.addons[0]
  return (
    <Row color="text">
      <Box w="45%">
        <Heading
          as="h1"
          m={0}
          color="inherit"
          fontSize={["2xl", null, null, "3xl"]}
          flex={1}
          minW="20%"
          {...borderBottom(true)}
        >
          <Logo siteTitle={"Penn Star"} />
        </Heading>
        <TextContent
          fontSize={"sm"}
          mx="auto"
          content={preFooter?.node?.block?.block?.content}
        />
      </Box>
      <Box w="20%" h="200px" mx="1em" px={2} pt={5}>
        <Heading as="h3" fontSize="sm" {...borderBottom(true)}>
          {"CONTACT US"}
        </Heading>
        <Stack isInline pt={2}>
          <Box
            as="i"
            className="fa fa-map-marker fa-2x"
            style={{ color: "blue" }}
          />
          <Box fontSize="sm">
            <Text>{`${streetAddress} ${
              suite ? `, suite: ${suite}` : ""
            }`}</Text>
            <Text>{`${city}, ${state} ${zip}`}</Text>
          </Box>
        </Stack>
        <LinkWrapper
          w="100%"
          isEnabled
          isDefault
          path={`/contact`}
          label={email}
          leftIcon="email"
          size="xs"
          p={2}
        />
        <LinkWrapper
          w="100%"
          isEnabled
          isContact
          isDefault
          path={`tel:${phone}`}
          label={phone}
          leftIcon="phone"
          size="xs"
          p={2}
        />
      </Box>
      <Box w="20%" h="200px" mx="1em" px={2} pt={5}>
        <Heading as="h3" fontSize="sm" {...borderBottom(true)}>
          {"LINKS"}
        </Heading>
        <Content display="flex" flexDirection="column" alignItems="flex-end">
          {preFooter?.node?.pages?.map((page, i) => (
            <LinkWrapper
              key={i}
              isEnabled
              size="xs"
              color="mode.light.text"
              variant="ghost"
              textTransform="upperCase"
              path={`/${page.name}`}
              label={`${page.name}`}
            />
          ))}
        </Content>
      </Box>
    </Row>
  )
}
