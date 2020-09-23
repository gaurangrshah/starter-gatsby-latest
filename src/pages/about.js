import React from "react"
import { graphql } from "gatsby"
import { Box, SimpleGrid } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  test,
  linearGradient,
  BackgroundImage,
  BaseContainer,
  Block,
  Content,
  PreFooter,
  SimpleCard,
} from "../components"

const AboutPage = ({ data }) => {
  const [preFooter, aboutHero, aboutUs, aboutTeam] = data.allStrapiSection.edges

  const [founder, ...rest] = aboutTeam.node.block.cards
  return (
    <DefaultLayout pageTagline={""}>
      <BaseContainer fluid overflow="hidden">
        <BackgroundImage
          minH={["400px", null, null, "600px"]}
          maxH="80vh"
          gradientOverlay={linearGradient(14)}
        />
        <Content
          color
          position="absolute"
          top={0}
          textAlign="left"
          ml={[12, null, null, 12 * 4]}
          mt={[12, "20%", null, 12 * 4]}
        >
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
            {...aboutHero.node.block.block}
          />
        </Content>
      </BaseContainer>
      <BaseContainer>
        <Content>
          <Block {...aboutUs.node.block.block} />
        </Content>
      </BaseContainer>
      <BaseContainer>
        <Content>
          <Box w="40%" mx="auto" color="mode.light.background">
            <SimpleCard {...founder} />
          </Box>
          <Block {...aboutTeam.node.block.block}>
            <SimpleGrid
              w="80%"
              mx="auto"
              my={12}
              order={8}
              spacing={6}
              columns={3}
              justifyItems="center"
              minChildWidth={"200px"}
              color="white"
              isInline
            >
              {rest?.map((card, i) => (
                <SimpleCard key={i} maxW="280px" minH="250px" {...card} />
              ))}
            </SimpleGrid>
          </Block>
        </Content>
      </BaseContainer>
    </DefaultLayout>
  )
}

export default AboutPage

export const query = graphql`
  query AboutQueryBasic {
    allStrapiSection(
      filter: { pages: { elemMatch: { name: { eq: "about" } } } }
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
