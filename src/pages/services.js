import React from "react"
import { graphql } from "gatsby"
import { Box, Grid, SimpleGrid } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  test,
  linearGradient,
  BackgroundImage,
  BaseContainer,
  Block,
  Content,
  PreFooter,
  Row,
  SimpleCard,
} from "../components"

const ServicesPage = ({ data }) => {
  const [preFoooter, servicesHero, services] = data.allStrapiSection.edges

  console.log(services)

  return (
    <DefaultLayout pageTagline={""}>
      <BaseContainer fluid overflow="hidden">
        <BackgroundImage
          minH={["400px", null, null, "600px"]}
          maxH="80vh"
          gradientOverlay={linearGradient(14)}
        />
        <Row
          position="absolute"
          top="0"
          // right="0"
          flexDirection="column"
          alignItems="flex-end"
          w="100%"
        >
          <Content position="relative" color textAlign="left">
            <Block
              mr={[12, null, null, 12 * 4]}
              mt={[12, "20%", null, 12 * 4]}
              shadow
              position="relative"
              config={{
                heading: { border: true },
                tagline: { border: true, fontSize: "xl" },
                link: {
                  isDefault: false,
                  isMoreLink: true,
                  alignSelf: "flex-end",
                },
              }}
              {...servicesHero.node.block.block}
            />
          </Content>
          <Content w="70%" mr={5}>
            <SimpleGrid
              colums={3}
              minChildWidth="150px"
              spacing={3}
              justify="center"
            >
              {servicesHero.node.block.cards.map((card, i) => (
                <SimpleCard
                  key={i}
                  h="100%"
                  mx="auto"
                  maxW="250px"
                  minH="250px"
                  truncate={20}
                  {...card}
                  config={{ link: { as: Box }, icon: { color: "lightblue" } }}
                />
              ))}
            </SimpleGrid>
          </Content>
        </Row>
      </BaseContainer>
      <BaseContainer fluid pattern h="100%" py={12} mx="auto">
        <Content
          position="relative"
          w="80%"
          h="800px"
          mx="auto"
          display="flex"
          justifyContent="center"
          flexWrap="wrap"
        >
          {services.node.block.cards.map((card, i) => (
            <SimpleCard
              key={i}
              mx="auto"
              w="250px"
              h="180px"
              {...card}
              config={{ link: { padding: "1em" } }}
            />
          ))}
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
