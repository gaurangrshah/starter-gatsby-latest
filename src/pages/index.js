import React from "react"
import { Box, Button, Flex, Text } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import {
  box,
  test,
  linearGradient,
  BackgroundImage,
  BaseContainer,
  Block,
  Content,
  Row,
  TrackingBox,
} from "../components"

const IndexPage = () => {
  return (
    <DefaultLayout pageTagline={""}>
      <BaseContainer fluid minH="600px" maxH="600px">
        <BackgroundImage gradientOverlay={linearGradient(11)} />
        <Content
          position="absolute"
          top={0}
          textAlign="left"
          ml={12 * 2}
          mt={12 * 4}
        >
          <Block
            position="relative"
            heading="Hello Nurse!"
            content={["Welcome to your new Gatsby site."]}
            height="100%"
            my="auto"
            childrenProps={{ textAlign: "right" }} // passes props to children container
          >
            <Button variantColor="blue">Text One</Button>
          </Block>
        </Content>
      </BaseContainer>
      <BaseContainer fluid pattern py={12}>
        <Content w="80%" h="20vh" mx="auto" bg rounded shadow="maxbttm">
          Hello
        </Content>
      </BaseContainer>
    </DefaultLayout>
  )
}

export default IndexPage
