import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  component,
  constants,
  BackgroundImage,
  BaseContainer,
  Block,
  Content,
  Profile,
  Row,
  SimpleCard,
} from "../components"

const AboutPage = ({ data }) => {
  const [preFooter, aboutHero, aboutUs, aboutTeam] = data.allStrapiSection.edges

  const [founder, ...rest] = aboutTeam.node.block.cards
  return (
    <DefaultLayout pageTagline={""}>
      <BaseContainer fluid overflow="hidden">
        <BackgroundImage {...component.hero} />
        <Row fluid {...component.hero.content}>
          <Block
            fluid
            alignItems="flex-start"
            shadow
            {...component.hero.block}
            config={{
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
          maxW={constants?.MAX_WIDTH}
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
          maxW={constants?.MAX_WIDTH}
          mx="auto"
          my={12}
          py={6}
          px={4}
        >
          <SimpleCard
            maxW={constants?.CARD_WIDTH}
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
          maxW={constants?.MAX_WIDTH}
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
                  maxW={["320px", constants?.CARD_WIDTH_LG]}
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
