import React from "react"
import { graphql } from "gatsby"
import { Box, useMultiStyleConfig } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  BackgroundImage,
  BaseContainer,
  Block,
  Content,
  Row,
  FlexCard,
} from "../components"

const ServicesPage = ({ data }) => {
  const servicesHero = data.allStrapiSection.edges[0]
  const services = data.allStrapiSection.edges[1]

  const hero = useMultiStyleConfig("hero", {})
  return (
    <DefaultLayout
      seo={{ siteTitle: "Services", siteTagline: "Land Transfer Services" }}
    >
      <BaseContainer fluid overflow="hidden" h="auto">
        <BackgroundImage sx={hero?.base} />
        <Row
          fluid
          shadow
          flexDirection="column"
          alignItems="flex-start"
          sx={{
            ...hero?.content,
            mt: [6, "14%", null, 6],
            mr: [0, null, null, 12 * 2],
          }}
          w="100%"
        >
          <Row
            color
            textAlign="right"
            position="relative"
            justifyContent="flex-end"
            p={0}
            mr={0}
          >
            <Block
              fluid
              shadow
              sx={hero?.block}
              config={{
                heading: { border: true },
                tagline: { border: true, fontSize: "xl" },
                link: {
                  isDefault: false,
                  isMoreLink: true,
                },
              }}
              {...servicesHero?.node?.block?.block}
            />
          </Row>
          <Row
            display={["none", null, null, "flex"]}
            w={[null, "70%", null, "80%", "100%"]}
            mr={0}
            marginLeft={0}
            ml="auto"
            justifyContent="flex-end"
            flexWrap="nowrap"
          >
            {servicesHero?.node?.block?.cards?.map((card, i) => (
              <FlexCard
                key={i}
                w={["50%", "30%", null, null]}
                truncate={80}
                {...card}
                config={{
                  link: {
                    as: Box,
                    p: 3,
                    isDefault: false,
                    isMoreLink: true,
                    isEnabled: true,
                  },
                  icon: { color: "lightblue" },
                  heading: { fontSize: ["sm", "lg", null, null, "2xl"] },
                  content: { display: ["none", null, null, "block"] },
                }}
              />
            ))}
          </Row>
        </Row>
      </BaseContainer>
      <BaseContainer fluid pattern py={[12, null, null, 12 * 3]}>
        <Content position="relative" mx="auto" textAlign="center">
          <Block
            position="relative"
            {...services?.node?.block?.block}
            config={{
              heading: { fontSize: "2xl", order: 0 },
              misc: { order: 1 },
            }}
          >
            <Row fluid center flexWrap="wrap" order={5} my={12}>
              {services?.node?.block?.cards.map((card, i) => (
                <FlexCard
                  key={i}
                  mx={3} // sets the margin around each card
                  flexGrow={0}
                  w={["100%", "45%", "30%"]}
                  minH={"3xs"}
                  m={3}
                  icon
                  config={{
                    heading: { as: "h3", fontSize: ["lg", null, null, "2xl"] },
                    link: {
                      p: "1em",
                      isDefault: false,
                      isMoreLink: true,
                      isEnabled: true,
                      size: "xs",
                      mt: 6,
                      alignSelf: "flex-end",
                      to: "/",
                    },
                  }}
                  {...card}
                />
              ))}
            </Row>
          </Block>
        </Content>
      </BaseContainer>
    </DefaultLayout>
  )
}

export default ServicesPage

export const query = graphql`
  query ServicesQueryBasic {
    allStrapiSection(
      filter: { pages: { elemMatch: { name: { eq: "services" } } } }
    ) {
      edges {
        node {
          block {
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
              image {
                alternativeText
                caption
                size
                name
                formats {
                  large {
                    url
                    width
                    height
                  }
                  medium {
                    url
                    width
                    height
                  }
                }
              }
              content {
                content
              }
            }
            cards {
              text {
                type
                text
              }
              link {
                path
                label
                isEnabled
              }
              icon
              content {
                content
              }
            }
          }
          name
          order
        }
      }
    }
  }
`
