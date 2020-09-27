import React from "react"
import { graphql } from "gatsby"
import { Box } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  test,
  padding,
  constants,
  component,
  BackgroundImage,
  BaseContainer,
  Block,
  Content,
  Row,
  FlexCard,
} from "../components"

const ServicesPage = ({ data }) => {
  const servicesHero = data.allStrapiSection.edges[1]
  const services = data.allStrapiSection.edges[2]

  return (
    <DefaultLayout pageTagline={""}>
      <BaseContainer fluid overflow="hidden" h="auto">
        <BackgroundImage {...component.hero} />
        <Row
          fluid
          {...component.hero.content}
          flexDirection="column"
          alignItems="flex-start"
          mr={[12, null, null, 12 * 4]}
          mt={[6, "20%", null, 12 * 2]}
          w="100%"
        >
          <Row
            fluid
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
              position="relative"
              mx={0}
              config={{
                heading: { border: true },
                tagline: { border: true, fontSize: "xl" },
                link: {
                  isDefault: false,
                  isMoreLink: true,
                },
              }}
              {...servicesHero.node.block.block}
            />
          </Row>
          <Row
            display={["none", null, null, "flex"]}
            // fluid
            // responsive
            w={[null, "70%", null, "80%", "100%"]}
            // mx={3}
            mr={0}
            ml={0}
            ml="auto"
            justifyContent="flex-end"
            flexWrap="nowrap"
            {...test()}
          >
            {servicesHero.node.block.cards.map((card, i) => (
              <FlexCard
                key={i}
                w={["50%", "30%", null, null]}
                truncate={80}
                {...card}
                config={{
                  link: { as: Box, p: 3 },
                  icon: { color: "lightblue" },
                  heading: { fontSize: ["sm", "lg", null, null, "2xl"] },
                  content: { display: ["none", null, null, "block"] },
                }}
              />
            ))}
          </Row>
        </Row>
      </BaseContainer>
      <BaseContainer fluid pattern {...padding.main}>
        <Content position="relative" mx="auto" textAlign="center">
          <Block
            position="relative"
            {...services.node.block.block}
            config={{
              heading: { fontSize: "2xl", order: 0 },
              misc: { order: 1 },
            }}
          >
            <Row fluid center flexWrap="wrap" order={5} my={12}>
              {services.node.block.cards.map((card, i) => (
                <FlexCard
                  key={i}
                  mx={3} // sets the margin around each card
                  flexGrow={0}
                  w={["100%", "45%", "30%"]}
                  minH={constants?.CARD_WIDTH}
                  m={3}
                  icon
                  config={{
                    heading: { as: "h3", fontSize: ["lg", null, null, "2xl"] },
                    link: {
                      p: "1em",
                      isDefault: false,
                      isMoreLink: true,
                      size: "xs",
                      mt: 6,
                      alignSelf: "flex-end",
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
