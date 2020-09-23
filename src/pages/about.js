import React from "react"
import { graphql } from "gatsby"
import { SimpleGrid } from "@chakra-ui/core"

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
  // const [homeHero, homeAuthority] = data.allStrapiSection.edges

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
          mt={[12, null, null, 12 * 4]}
        >
          Hiya
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
          name
          order
          block {
            name
            block {
              text {
                text
                type
                order
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
              content {
                content
              }
            }
            addons {
              city
              email
              id
              phone
              state
              streetAddress
              suite
              zip
            }
          }
          pages {
            name
          }
        }
      }
    }
  }
`
