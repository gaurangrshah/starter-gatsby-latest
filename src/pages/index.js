import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  padding,
  constants,
  component,
  BackgroundImage,
  BaseContainer,
  Block,
  Content,
  Row,
  SimpleCard,
  FlexCard,
} from "../components"

const IndexPage = ({ data }) => {
  const [homeHero, homeAuthority] = data.allStrapiSection.edges
  return (
    <DefaultLayout pageTagline={""}>
      <BaseContainer fluid overflow="hidden">
        <BackgroundImage {...component.hero} />
        <Row {...component.hero.content}>
          <Block
            fluid
            shadow
            alignItems="flex-start"
            {...component.hero.block}
            config={{
              heading: { border: true },
              tagline: { border: true, fontSize: "xl" },
              link: {
                isDefault: false,
                isMoreLink: true,
                variantColor: "blue",
              },
            }}
            {...homeHero.node.block.block}
          />
        </Row>
      </BaseContainer>
      <BaseContainer fluid pattern {...padding.main}>
        <Row fluid>
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
                w={["100%", null, "80%"]}
                responsive
                center
                flexWrap={["wrap", null, null, "nowrap"]}
                alignItems="stretch"
                order={5}
                my={12}
                mx="auto"
                color="background"
              >
                {homeAuthority?.node?.block?.cards?.map((card, i) => (
                  <FlexCard
                    key={i}
                    truncate
                    flexbasis={constants?.CARD_WIDTH_LG}
                    maxH="400px"
                    mx={["auto", null, 3]}
                    my={[3]}
                    config={{
                      heading: { fontSize: ["lg", null, "xl"] },
                      text: { border: true },
                      link: { p: 3 },
                    }}
                    {...card}
                  />
                ))}
              </Row>
            </Block>
          </Content>
        </Row>
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
