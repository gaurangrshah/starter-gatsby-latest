import React from "react"
import { graphql } from "gatsby"
import { Box, SimpleGri, Stack, Text } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  box,
  test,
  linearGradient,
  BackgroundImage,
  BaseContainer,
  BGIcon,
  Block,
  Content,
  FormLayout,
  PreFooter,
  Row,
  SimpleCard,
} from "../components"

import FrameLoader from "../components/chakra-ui/iframe-loader"

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.1127886739337!2d-75.37650524873258!3d40.67148374792818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c44070c952e4a7%3A0x28d3813f2b1ac854!2s3894%20Courtney%20St%20%23105%2C%20Bethlehem%2C%20PA%2018017!5e0!3m2!1sen!2sus!4v1581316131243!5m2!1sen!2sus"

const ContactPage = ({ data }) => {
  const [preFooter, contactHero, contactForm] = data.allStrapiSection.edges
  console.log(
    "⭕️preFooter, contactHero, contactForm",
    preFooter
    // contactHero,
    // contactForm
  )
  const {
    email,
    phone,
    streetAddress,
    suite,
    city,
    state,
    zip,
  } = preFooter?.node?.block?.addons[0]
  return (
    <DefaultLayout pageTagline={""}>
      <BaseContainer fluid height={["60vh", "40vh"]} overflow="hidden">
        <FrameLoader
          title="contactmap"
          src={MAP}
          maxH={"60vh"}
          minH="40vh"
          mt={12 * 4}
        />
        <Content
          color="bg3"
          position="absolute"
          top={0}
          textAlign="left"
          w={"100%"}
          pb={6}
          mt={["100%", 12 * 4]}
        >
          <Row
            responsive
            rounded
            shadow={"maxbttm"}
            bg="background"
            justifyContent="space-between"
            w={["100%", "40%"]}
            maxW="500px"
            minW="400px"
            h={"100%"}
            mr={"10%"}
            // mt={["10%", 0]}
            pb={6}
          >
            <Content
              bg
              rounded
              w="100%"
              h="45%"
              px={2}
              py={2}
              color="mode.light.alt3"
              borderBottomLeftRadius="0"
              borderBottomRightRadius="0"
              fontSize="md"
              fontWeight="600"
            >
              Contact The Penn Star Pros Today!
            </Content>
            <Row
              responsive
              fontSize={["sm", null, null, "xs"]}
              pt={3}
              textAlign={["left"]}
            >
              <Stack
                isInline
                mx="auto"
                align={["center"]}
                display={["none", null, null, "flex"]}
              >
                <BGIcon
                  shadow
                  icon="map-marker"
                  bg="mode.light.icon"
                  px={2}
                  py={1}
                />
                <Box px={3} w="80%">
                  <Text>{`${streetAddress}`}</Text>
                  {suite && <Text>{`Suite#: ${suite}`}</Text>}
                  <Text>{`${city}, ${state} ${zip}`}</Text>
                </Box>
              </Stack>
              <Box
                pl={[0, 3]}
                mx="auto"
                // ml={["-9em", 0]}
                borderLeft={["none", null, null, "2px solid lightgrey"]}
              >
                <Stack isInline align="center">
                  <BGIcon shadow icon="envelope" bg="mode.light.icon" />
                  <Text>{`email: ${email}`}</Text>
                </Stack>
                <Stack isInline align="center">
                  <BGIcon shadow icon="mobile" bg="mode.light.icon" />
                  <Text>{`phone: ${phone}`}</Text>
                </Stack>
              </Box>
            </Row>
          </Row>
        </Content>
      </BaseContainer>
      <BaseContainer pb={12 * 2} pt={[0, null, null, 12 * 2]} bg fluid>
        <Content w={["100%", null, null, "80%"]} mx="auto">
          <FormLayout />
        </Content>
      </BaseContainer>
    </DefaultLayout>
  )
}

export default ContactPage

export const query = graphql`
  query ContactQueryBasic {
    allStrapiSection(
      filter: { pages: { elemMatch: { name: { eq: "contact" } } } }
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
            addons {
              city
              email
              id
              phone
              state
              streetAddress
              suite
              zip
              data {
                email
                message
                name
                phone
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
