import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import { Box, Heading, Stack, Text } from "@chakra-ui/core"
import { EmailIcon, PhoneIcon } from "@chakra-ui/icons"
import { Content, Row } from "../layout"
import { LinkWrapper } from "../link-wrapper"
import { borderBottom, TextContent } from "../../blocks"
import { Logo } from "./logo"
import { component } from "../components"
import useSiteMetadata from "../../../hooks/use-site-metadata"
import { Presence } from "../animation"

export const PreFooter = () => {
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

  const { block } = data.strapiSection
  const { pages } = useSiteMetadata()
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
    <Presence
      type="SlideFade"
      timeout={1000}
      initialOffset="200px"
      config={{
        presence: {
          initialInView: true,
        },
        container: {
          className: "pre-footer",
          fluid: true,
          bg: "bg",
          py: [12],
          mb: [12, null, 0],
        },
      }}
    >
      <Row
        maxW={["5xl", null, null, null, "60%"]}
        responsive
        color="text"
        justifyContent="space-between"
        mb={"6em"}
      >
        <Content
          {...component?.flex?.flex6040[1]}
          mb={[6, null, null, 12]}
          mx="auto"
          minWidth={"40%"}
          color="brand"
        >
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
            maxW={["100%", null, null, "100%"]}
            content={block?.block?.content}
            color="mode.light.text"
          />
        </Content>
        <Row
          flex={1}
          w="100%"
          flexDirection={["column", "row", null, null]}
          alignItems={["flex-end", "stretch"]}
          justifyContent={["flex-end", "space-around", null, "space-evenly"]}
          py={[8, 5]}
        >
          <Content
            w={["100%", "50%", "40%"]}
            h="200px"
            mr={[0, 6]}
            pt={[5, null, null, 0]}
            color="brand"
          >
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
                  leftIcon={<EmailIcon />}
                  size="xs"
                  p={2}
                />
                <LinkWrapper
                  isEnabled
                  isContact
                  isDefault
                  path={`tel:${phone.replace(/-/g, "")}`}
                  label={phone}
                  leftIcon={<PhoneIcon />}
                  size="xs"
                  target="self"
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
                color="mode.light.text"
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
          </Content>
          <Content
            w={["100%", "40%"]}
            h="200px"
            pt={[12 * 2, 5, null, 0]}
            mt={[12, 0]}
            color="brand"
          >
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
                  path={`/${page?.label === "home" ? "" : page?.label}`}
                  label={`${page?.label}`}
                />
              ))}
            </Content>
          </Content>
        </Row>
      </Row>
    </Presence>
  )
}
