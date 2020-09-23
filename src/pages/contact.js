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

const ContactPage = ({ data }) => {
  // const [homeHero, homeAuthority] = data.allStrapiSection.edges

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
          mt={[12, null, null, 12 * 4]}
        >
          Hiya
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
          name
        }
      }
    }
  }
`
