import React from "react"
import { graphql } from "gatsby"
import { useMultiStyleConfig } from "@chakra-ui/core"
import { Slide } from "@chakra-ui/transition"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  BackgroundImage,
  BaseContainer,
  Block,
  Content,
  FlexCard,
  MotionBox,
  Row,
  Presence,
} from "../components"

const IndexPage = ({ data }) => {
  const [homeHero, homeAuthority] = data.allStrapiSection.edges
  const hero = useMultiStyleConfig("hero", {})

  return (
    <DefaultLayout
      seo={{ siteTitle: "Penn Star", siteTagline: "Land Transfer" }}
    >
      <Presence
        type="SlideFade"
        config={{
          presence: { initialInView: true },
          container: { fluid: true, minH: "20vh" },
        }}
        timeout={1000}
        initialOffset="-200px"
      >
        <BackgroundImage sx={hero.base} />
        <Row color sx={hero.content}>
          <Block
            fluid
            shadow
            alignItems="flex-start"
            sx={hero.block}
            config={{
              heading: { border: true },
              tagline: { border: true, fontSize: "xl" },
              link: {
                isDefault: false,
                isMoreLink: true,
                colorScheme: "blue",
              },
            }}
            {...homeHero.node.block.block}
          />
        </Row>
      </Presence>
      <Presence
        type="SlideFade"
        timeout={2000}
        initialOffset="-200px"
        config={{
          presence: {
            initialInView: true,
          },
          container: {
            fluid: true,
            pattern: true,
            py: [12, null, null, 12 * 3],
          },
        }}
      >
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
                  <MotionBox
                    key={i}
                    initial={{ opacity: 0, y: 400 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.5, duration: 1 }}
                  >
                    <FlexCard
                      truncate
                      flexbasis={32 * 2}
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
                  </MotionBox>
                ))}
              </Row>
            </Block>
          </Content>
        </Row>
      </Presence>
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
