import React from "react"
import { graphql } from "gatsby"
import { Box, Flex, Grid, SimpleGrid } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  test,
  component,
  linearGradient,
  MAX_WIDTH,
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
        <BackgroundImage {...component.hero} />
        <Row
          position="absolute"
          top="0"
          flexDirection="column"
          alignItems="flex-end"
          mr={[12, null, null, 12 * 4]}
          mt={[12, "20%", null, 12 * 4]}
          w="100%"
        >
          <Content color textAlign="left" position="relative">
            <Block
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
          <Content
            w={["100%", null, null, "70%"]}
            mr={5}
            mb={[12, null, null, 0]}
          >
            <Flex justifyContent="center" flexWrap="wrap" textAlign="left">
              {servicesHero.node.block.cards.map((card, i) => (
                <SimpleCard
                  key={i}
                  w={["150px", null, null, "250px"]}
                  minH="150px"
                  mx="auto"
                  truncate={120}
                  {...card}
                  config={{
                    link: { as: Box, p: 3 },
                    icon: { color: "lightblue" },
                    content: { display: ["none", null, null, "block"] },
                  }}
                />
              ))}
            </Flex>
          </Content>
        </Row>
      </BaseContainer>
      <BaseContainer fluid pattern py={12} mx="auto">
        <Content
          position="relative"
          w="80%"
          maxW={MAX_WIDTH}
          mx="auto"
          textAlign="center"
        >
          <Block
            {...services.node.block.block}
            config={{
              heading: {
                fontSize: "2xl",
              },
            }}
          />
        </Content>
        <Row
          fluid
          max
          responsive
          // maxW={MAX_WIDTH}
          // h={["1400px", "1200px", null, "800px"]}
          // mx="auto"
          // display="flex"
          // justifyContent={"center"}
          // alignItems={["center", null, null, "initial"]}
          // alignContent={["space-between", null, null, "initial"]}
          // flexWrap="wrap"
        >
          {services.node.block.cards.map((card, i) => (
            <SimpleCard
              key={i}
              mx="auto"
              w={["250px", "150px", null, "250px"]}
              flexBasis={"250px"}
              // h={["250px", null, null, "180px"]}
              borderBottom="10px solid transparent"
              {...card}
              config={{ link: { p: "1em" } }}
            />
          ))}
        </Row>
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
