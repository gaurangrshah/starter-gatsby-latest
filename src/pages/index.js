import React from "react"
import { Link } from "gatsby"
import { Box, Button } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import { Image, ViewportSpy } from "../components"

import { box, test } from "../utils"

const IndexPage = () => (
  <DefaultLayout pageTagline={""}>
    <Box {...test()} width="100%">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      Yellow
      <Button>Text One</Button>
      <p>Now go build something great.</p>
      <div
        style={{
          maxWidth: `300px`,
          marginTop: `120vh`,
          marginBottom: `1.45rem`,
        }}
      >
        <Image />
      </div>
      <ViewportSpy debug options={{ threshold: 0.1 }}>
        <Box {...box.base} {...box.fixedWidth} background="blue" />
      </ViewportSpy>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Box>
  </DefaultLayout>
)

export default IndexPage
