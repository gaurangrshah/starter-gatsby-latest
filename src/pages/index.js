import React from "react"
import { graphql } from "gatsby"
import { Flex, SimpleGrid } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  test,
  CARD_WIDTH,
  CARD_WIDTH_LG,
  component,
  BackgroundImage,
  BaseContainer,
  Block,
  Content,
  Row,
  SimpleCard,
} from "../components"

const IndexPage = ({ data }) => {
  const [homeHero, homeAuthority, preFooter] = data.allStrapiSection.edges
  // console.log(data.allStrapiSection.edges)
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
              heading: { border: true },
              tagline: { border: true, fontSize: "xl" },
              link: {
                isDefault: false,
                isMoreLink: true,
              },
            }}
            {...homeHero.node.block.block}
          />
        </Row>
      </BaseContainer>
      <BaseContainer fluid pattern py={12}>
        <Content shadow rounded color="bg4" bg="background">
          <Block
            fluid
            config={{
              heading: { textAlign: "center" },
              misc: {
                mx: "auto",
                w: ["90%", null, null, "60%"],
                textAlign: "center",
              },
              content: {
                w: ["90%", null, null, "70%"],
                mx: "auto",
              },
            }}
            textAlign="left"
            {...homeAuthority?.node?.block?.block}
          >
            <Row
              fluid
              responsive
              center
              flexWrap="wrap"
              order={5}
              my={12}
              color="background"
              {...test()}
            >
              {homeAuthority?.node?.block?.cards?.map((card, i) => (
                <SimpleCard
                  key={i}
                  flexbasis={CARD_WIDTH}
                  maxW={CARD_WIDTH_LG}
                  minH="250px"
                  config={{
                    text: { border: true },
                    link: { p: 3 },
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
