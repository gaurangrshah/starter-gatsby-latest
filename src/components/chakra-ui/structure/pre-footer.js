import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Box, Divider, Heading, Stack, Text } from "@chakra-ui/core"
import { Content, Row } from "../layout"
import { LinkWrapper } from "../link-wrapper"
import { borderBottom, TextContent } from "../../blocks"
import { Logo } from "./logo"
import { test } from "../chakra"
import { component, constants } from "../components"

export const PreFooter = ({ ...rest }) => {
  const data = useStaticQuery(graphql`
    query {
      strapiSection(name: { eq: "pre_footer" }) {
        name
        order
        block {
          name
          block {
            text {
              type
              text
              order
            }
            link {
              path
              label
              isEnabled
            }
            content {
              content
            }
          }
          addons {
            city
            email
            phone
            state
            streetAddress
            suite
            zip
          }
        }
        pages {
          name
          path
        }
      }
    }
  `)

  const { block, pages } = data.strapiSection
  // console.log("⭕️pages", pages)
  const {
    email,
    phone,
    streetAddress,
    suite,
    city,
    state,
    zip,
  } = block?.addons[0]

  return (
    <Row responsive color="text" justifyContent="space-between" mb={"6em"}>
      <Box {...component?.flex?.flex6040[1]} mb={[6, null, null, 12]} mx="auto">
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
          maxW={["100%", null, null, constants.MAX_CONTENT_WIDTH]}
          content={block?.block?.content}
        />
      </Box>
      <Row
        flex={1}
        w="100%"
        flexDirection={["column", "row", null, null]}
        alignItems={["flex-end", "center"]}
        justifyContent={["flex-end", null, null, "space-around"]}
        py={[8, 0, null]}
      >
        <Box w={"40%"} h="200px" mr={[6]} pt={[5, null, null, 0]}>
          <Heading as="h3" fontSize="sm" {...borderBottom(true)}>
            {"CONTACT US"}
          </Heading>
          <Box>
            <Stack my={3} align={["flex-end"]} {...borderBottom(true)}>
              <LinkWrapper
                isEnabled
                isDefault
                path={`/contact`}
                label={email}
                leftIcon="email"
                size="xs"
                p={2}
              />
              <LinkWrapper
                isEnabled
                isContact
                isDefault
                path={`tel:${phone.replace(/-/g, "")}`}
                label={phone}
                leftIcon="phone"
                size="xs"
                p={2}
              />
            </Stack>
            <Stack
              isInline
              flex={1}
              justify={"flex-end"}
              pt={[2, null, null, 0]}
              my={3}
              textAlign="right"
            >
              <Box
                as="i"
                w="5%"
                className="fa fa-map-marker"
                style={{ color: "blue", fontSize: "1.3rem" }}
              />
              <Box fontSize={["xs", null, "sm"]} pl={3}>
                <Text>{`${streetAddress}`}</Text>
                {suite && <Text>{`Suite#: ${suite}`}</Text>}
                <Text>{`${city}, ${state} ${zip}`}</Text>
              </Box>
            </Stack>
          </Box>
        </Box>
        <Box w={"40%"} h="200px" pt={[12 * 2, 5, null, 0]} mt={[12, 0]}>
          <Heading as="h3" fontSize="sm" {...borderBottom(true)}>
            {"LINKS"}
          </Heading>
          <Content
            display="flex"
            flexDirection="column"
            alignItems="flex-end"
            mt={3}
          >
            {pages?.map((page, i) => (
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
    </Row>
  )
}
