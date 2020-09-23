import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Box, Heading, Stack, Text } from "@chakra-ui/core"
import { Content, Row } from "../layout"
import { LinkWrapper } from "../link-wrapper"
import { borderBottom, TextContent } from "../../blocks"
import { Logo } from "./logo"

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
    <Row responsive color="text" justifyContent="center" mb={"6em"}>
      <Box w={["100%", null, null, "45%"]}>
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
          content={block?.block?.content}
        />
      </Box>
      <Row
        w={["100%", null, null, "45%"]}
        py={[6, null, null, 0]}
        responsive
        flexDirection={["column", "row", null, null]}
        justifyContent={{ lg: "flex-end" }}
      >
        <Box w={["100%", "45%", null, "40%"]} h="200px" mx="1em" px={2} pt={5}>
          <Heading as="h3" fontSize="sm" {...borderBottom(true)}>
            {"CONTACT US"}
          </Heading>
          <Stack isInline pt={2}>
            <Box
              as="i"
              w="10%"
              className="fa fa-map-marker fa-2x"
              style={{ color: "blue" }}
            />
            <Box fontSize="sm" pl={3} w="80%">
              <Text>{`${streetAddress}`}</Text>
              {suite && <Text>{`Suite#: ${suite}`}</Text>}
              <Text>{`${city}, ${state} ${zip}`}</Text>
            </Box>
          </Stack>
          <Stack float="right">
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
        </Box>
        <Box
          w={["100%", "45%", null, "35%"]}
          h="200px"
          mx="1em"
          px={2}
          pt={5}
          justifyContent={{ lg: "flex-end" }}
        >
          <Heading as="h3" fontSize="sm" {...borderBottom(true)}>
            {"LINKS"}
          </Heading>
          <Content display="flex" flexDirection="column" alignItems="flex-end">
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
