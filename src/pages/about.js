import React from "react"
import { graphql } from "gatsby"
import { Box, SimpleGrid } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  test,
  MAX_WIDTH,
  component,
  BackgroundImage,
  BaseContainer,
  Block,
  Content,
  Profile,
  SimpleCard,
} from "../components"

const AboutPage = ({ data }) => {
  const [preFooter, aboutHero, aboutUs, aboutTeam] = data.allStrapiSection.edges

  const [founder, ...rest] = aboutTeam.node.block.cards
  return (
    <DefaultLayout pageTagline={""}>
      <BaseContainer fluid overflow="hidden">
        <BackgroundImage {...component.hero} />
        <Content {...component.heroContent}>
          <Block
            {...component.heroBlock}
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
      <BaseContainer fluid pattern py={12}>
        <Content
          bg="background"
          shadow
          rounded
          maxW={MAX_WIDTH}
          mx="auto"
          py={6}
          px={4}
          textAlign="center"
        >
          <Block w="80%" {...aboutUs.node.block.block} />
        </Content>
        <Content
          bg="background"
          shadow
          rounded
          maxW={MAX_WIDTH}
          mx="auto"
          py={6}
          px={4}
          color="white"
        >
          <Box mx="auto" w="100%">
            <SimpleCard
              config={{ link: { isDefault: false, isEnabled: false } }}
            >
              <Profile {...founder} />
            </SimpleCard>
          </Box>
          <Block py={12} px={4} w="80%" {...aboutTeam.node.block.block}>
            <SimpleGrid
              isInline
              order={8}
              spacing={6}
              columns={3}
              justifyItems="center"
              minChildWidth={"200px"}
              w="100%"
              mx="auto"
              my={12}
              color="white"
            >
              {rest?.map((card, i) => (
                <SimpleCard
                  key={i}
                  maxW="200px"
                  mx="auto"
                  config={{ link: { isDefault: false, isEnabled: false } }}
                >
                  <Profile {...card} />
                </SimpleCard>
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
