import React from "react"
import { graphql } from "gatsby"
import { Box, Stack, Text } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  test,
  padding,
  component,
  constants,
  fields,
  BaseContainer2,
  BGIcon,
  BlockText,
  CHookInput,
  Content,
  HookForm,
  Row,
  Block,
} from "../components"

import FrameLoader from "../components/chakra-ui/iframe-loader"

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.1127886739337!2d-75.37650524873258!3d40.67148374792818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c44070c952e4a7%3A0x28d3813f2b1ac854!2s3894%20Courtney%20St%20%23105%2C%20Bethlehem%2C%20PA%2018017!5e0!3m2!1sen!2sus!4v1581316131243!5m2!1sen!2sus"

const ContactPage = ({ data }) => {
  const [preFooter, contactHero, contactForm] = data.allStrapiSection.edges

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
      <BaseContainer2 fluid height={["60vh", "40vh"]} overflow="hidden">
        <FrameLoader
          title="contactmap"
          src={MAP}
          maxH={"60vh"}
          minH="40vh"
          mt={12 * 4}
        />
        <Content
          color="bg3"
          {...component.hero.content}
          mr={[12, null, null, 12 * 3]}
          pb={6}
          mt={["100%", "50%", "30%", "10%"]}
        >
          <Row
            fluid
            rounded
            responsive
            shadow={"maxbttm"}
            bg="background"
            justifyContent="space-between"
            maxW={"550px"}
            pb={6}
            {...test()}
          >
            <Content
              maxW={false}
              bg
              rounded
              maxW="100%"
              minW="100%"
              h="45%"
              py={2}
              color="brand"
              textAlign="center"
              borderBottomLeftRadius="0"
              borderBottomRightRadius="0"
              fontSize="md"
              fontWeight="600"
            >
              Contact The Penn Star Team Today!
            </Content>
            <Row
              fluid
              responsive
              fontSize={["sm", null, null, "sm"]}
              p={3}
              textAlign={["left"]}
              color="brand"
            >
              <Stack
                isInline
                flex={1}
                w="50%"
                mx="auto"
                justify="center"
                align="center"
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
      </BaseContainer2>
      {/* Form Layout Content */}

      <BaseContainer2 bg fluid color="brand" {...padding.main}>
        <BlockText
          text="Send us a quick message!"
          type="heading"
          as="h3"
          mb={12 * 2}
          textAlign="center"
        />
        <Row maxW="60%">
          <Content
            rounded
            shadow
            color="brand"
            bg="background"
            mx="auto"
            w={constants.MAX_WIDTH}
            p={["15%", null, null, 12]}
            px={["15%", null, null, 4 * 4]}
            border="1px solid rgba(0,0,0,0.2)"
            textAlign="center"
            className="form-cont"
          >
            <Block
              text={[
                { type: "lead", text: "Feel free to drop us a line..." },
                { type: "heading", text: "Thank you for reaching out!" },
                { type: "misc", text: "Fill out the form below." },
              ]}
            />
            <HookForm>
              {fields.map((field, i) => (
                <CHookInput key={i} {...field} />
              ))}
            </HookForm>
          </Content>
        </Row>
      </BaseContainer2>
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
