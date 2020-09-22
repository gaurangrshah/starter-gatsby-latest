import React from "react"
import { graphql } from "gatsby"
import { Box, Button, Flex, Text } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  box,
  test,
  linearGradient,
  BackgroundImage,
  BaseContainer,
  Block,
  Content,
  Row,
  TrackingBox,
} from "../components"

const IndexPage = ({ data }) => {
  const [homeHero, homeAuthoriy] = data.allStrapiSection.edges
  console.log(data.allStrapiSection.edges)
  return (
    <DefaultLayout pageTagline={""}>
      <BaseContainer fluid minH="600px" maxH="80vh" overflowY="hidden">
        <BackgroundImage gradientOverlay={linearGradient(14)} />
        <Content
          position="absolute"
          top={0}
          textAlign="left"
          ml={12 * 2}
          mt={12 * 4}
        >
          <Block
            maxW="50%"
            height="100%"
            position="relative"
            block={homeHero.node.block.block}
            // heading={homeHero.node.block.block.text[0].text}
            // content={[homeHero.node.block.block.content[0].content]}
            my="auto"
            childrenProps={{ textAlign: "right" }} // passes props to children container
          >
            <Button variantColor="blue">Text One</Button>
          </Block>
        </Content>
      </BaseContainer>
      <BaseContainer fluid pattern py={12}>
        <Content w="80%" h="20vh" mx="auto" bg rounded shadow="maxbttm">
          Hello
        </Content>
      </BaseContainer>
    </DefaultLayout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQueryBasic {
    allStrapiSection(
      filter: { pages: { elemMatch: { name: { eq: "home" } } } }
    ) {
      edges {
        node {
          name
          order
          block {
            name
            block {
              text {
                text
                type
              }
              content {
                content
              }
              image {
                alternativeText
                name
                height
                width
                formats {
                  large {
                    url
                    size
                    name
                  }
                  medium {
                    url
                    size
                    name
                  }
                }
              }
              link {
                path
                label
                isEnabled
              }
            }
            cards {
              text {
                text
                type
              }
              link {
                path
                label
                isEnabled
              }
              icon
            }
          }
        }
      }
    }
  }
`
