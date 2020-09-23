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

const IndexPage = ({ data }) => {
  const [preFooter, homeHero, homeAuthority] = data.allStrapiSection.edges

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
            {...homeHero.node.block.block}
          />
        </Content>
      </BaseContainer>
      <BaseContainer fluid pattern py={12}>
        <Content w="80%" mx="auto" color="bg4" bg="background" shadow rounded>
          <Block
            p={4}
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
            textAlign="center"
            {...homeAuthority?.node?.block?.block}
          >
            <SimpleGrid
              w="80%"
              mx="auto"
              my={12}
              order={5}
              spacing={6}
              columns={3}
              justifyItems="center"
              minChildWidth={"200px"}
              color="white"
              isInline
            >
              {homeAuthority?.node?.block?.cards?.map((card, i) => (
                <SimpleCard
                  key={i}
                  maxW="280px"
                  minH="250px"
                  config={{ text: { borderBottom: true } }}
                  {...card}
                />
              ))}
            </SimpleGrid>
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
