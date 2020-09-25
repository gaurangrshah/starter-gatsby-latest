import React from "react"
import { graphql } from "gatsby"
import { Box, Flex, SimpleGrid } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  test,
  MAX_WIDTH,
  MAX_CONTENT_WIDTH,
  CARD_WIDTH_LG,
  CARD_WIDTH,
  component,
  BackgroundImage,
  BaseContainer,
  Block,
  BlockText,
  Content,
  Profile,
  Row,
  SimpleCard,
  TextContent,
} from "../components"

const AboutPage = ({ data }) => {
  const [preFooter, aboutHero, aboutUs, aboutTeam] = data.allStrapiSection.edges

  const [founder, ...rest] = aboutTeam.node.block.cards
  return (
    <DefaultLayout pageTagline={""}>
      <BaseContainer fluid overflow="hidden">
        <BackgroundImage {...component.hero} />
        <Row fluid {...component.heroContent}>
          <Block
            fluid
            alignItems="flex-start"
            shadow
            {...component.heroBlock}
            config={{
              // heading: { border: true },
              tagline: { border: true, fontSize: ["md", "xl"] },
              link: {
                isDefault: false,
                isMoreLink: true,
              },
            }}
            {...aboutHero.node.block.block}
          />
        </Row>
      </BaseContainer>
      <BaseContainer fluid pattern py={12}>
        <Content
          bg="background"
          color="bg4"
          shadow
          rounded
          maxW={MAX_WIDTH}
          mx="auto"
          py={6}
          px={4}
          textAlign="center"
        >
          <Block
            fluid
            {...aboutUs.node.block.block}
            config={{
              heading: { my: 12 },
              lead: {
                mx: "auto",
                // maxW: MAX_CONTENT_WIDTH,
                border: true,
                borderColor: "red",
              },
              content: {
                color: `mode.${"light"}.text`,
                textAlign: ["left", null, "center"],
              },
            }}
          />
        </Content>
        <Content
          bg="background"
          color={`mode.${"light"}.text`}
          shadow
          rounded
          maxW={MAX_WIDTH}
          mx="auto"
          my={12}
          py={6}
          px={4}
        >
          <SimpleCard
            maxW={CARD_WIDTH}
            color="background"
            config={{
              link: { isDefault: false, isEnabled: false },
            }}
          >
            <Profile {...founder} />
          </SimpleCard>
          <Block fluid py={12} {...aboutTeam.node.block.block} />
        </Content>
      </BaseContainer>
      <BaseContainer bg fluid py={12}>
        <Content
          shadow
          rounded
          bg="background"
          maxW={MAX_WIDTH}
          py={6}
          textAlign="center"
          color="bg4"
        >
          <Block
            fluid
            text={[{ text: "This is the text", type: "heading" }]}
            mx="auto"
          >
            <Row
              fluid
              responsive
              color="background"
              justifyContent={["inherit", null, "space-around"]}
              alignItems="center"
              order={8}
              my={12}
            >
              {rest?.map((card, i) => (
                <SimpleCard
                  key={i}
                  minH={"180px"}
                  maxW={["320px", CARD_WIDTH_LG]}
                  config={{
                    link: { isEnabled: false },
                  }}
                >
                  <Profile {...card} />
                </SimpleCard>
              ))}
            </Row>
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
