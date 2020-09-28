import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  padding,
  component,
  constants,
  BackgroundImage,
  BaseContainer,
  Block,
  Content,
  FlexCard,
  Profile,
  Row,
  SimpleCard,
  StarsStripesLeft,
  StarsStripesRight,
} from "../components"

const AboutPage = ({ data }) => {
  const [preFooter, aboutHero, aboutUs, aboutTeam] = data.allStrapiSection.edges

  const [founder, ...rest] = aboutTeam.node.block.cards
  return (
    <DefaultLayout pageTagline={""}>
      <BaseContainer fluid overflow="hidden">
        <BackgroundImage {...component.hero} />
        <Row {...component.hero.content}>
          <Block
            fluid
            alignItems="flex-start"
            shadow
            {...component.hero.block}
            config={{
              tagline: { border: true, fontSize: ["md", "xl"] },
              link: {
                colorScheme: "blue",
                isDefault: false,
                isMoreLink: true,
              },
            }}
            {...aboutHero.node.block.block}
          />
        </Row>
      </BaseContainer>
      <BaseContainer fluid pattern {...padding.main}>
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
            w={["100%", "25%"]}
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
      <BaseContainer bg fluid color="brand" py={12}>
        <Row
          maxW={constants.MAX_CONTENT_WIDTH}
          responsive
          center
          justifyContent={["center", null, null, "space-around"]}
        >
          <StarsStripesLeft w="25%" hideMobile />
          <Block
            flex={1}
            textAlign="center"
            text={[{ text: "Penn Star All-Stars", type: "heading" }]}
            mx="auto"
            config={{
              heading: {
                fontSize: ["xl", null, "3xl"],
                textTransform: "uppercase",
                pt: 10,
              },
            }}
          />
          <StarsStripesRight w="25%" hideMobile />
        </Row>
        <Content
          shadow
          rounded
          bg="background"
          maxW={constants?.MAX_WIDTH}
          py={6}
          mb={12}
          textAlign="center"
          color="bg4"
        >
          <Row
            flexWrap={["wrap", "nowrap"]}
            color="background"
            justifyContent={["space-between", null, "space-around"]}
            alignItems="center"
            order={8}
            my={12}
          >
            {rest?.map((card, i) => (
              <FlexCard
                key={i}
                minH={"180px"}
                w={["100%", "45%", "30%"]}
                flexGrow={0}
                m={[3]}
                config={{
                  link: { isEnabled: false },
                }}
              >
                <Profile {...card} />
              </FlexCard>
            ))}
          </Row>
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
