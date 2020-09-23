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

import FrameLoader from "../components/chakra-ui/iframe-loader"

const MAP =
  "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.1127886739337!2d-75.37650524873258!3d40.67148374792818!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c44070c952e4a7%3A0x28d3813f2b1ac854!2s3894%20Courtney%20St%20%23105%2C%20Bethlehem%2C%20PA%2018017!5e0!3m2!1sen!2sus!4v1581316131243!5m2!1sen!2sus"

const ContactPage = ({ data }) => {
  // const [homeHero, homeAuthority] = data.allStrapiSection.edges

  return (
    <DefaultLayout pageTagline={""}>
      <BaseContainer fluid overflow="hidden">
        <FrameLoader title="contactmap" src={MAP} />
        <Content
          color
          position="absolute"
          top={0}
          textAlign="left"
          ml={[12, null, null, 12 * 4]}
          mt={[12, null, null, 12 * 4]}
        ></Content>
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
          name
        }
      }
    }
  }
`
