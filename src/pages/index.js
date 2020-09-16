import React from "react"
import { Link } from "gatsby"
import { Box, Button } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"
import Image from "../components/image"
import SEO from "../components/seo"

import { boxStyles, test } from "../utils"

const IndexPage = () => (
  <DefaultLayout>
    <SEO siteTitle="Home" />
    <Box {...boxStyles.dummy} {...test()} width="100%">
      <h1>Hi people</h1>
      <p>Welcome to your new Gatsby site.</p>
      Yellow
      <Button>Text One</Button>
      <p>Now go build something great.</p>
      <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
        <Image />
      </div>
      <Link to="/page-2/">Go to page 2</Link> <br />
      <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
    </Box>
  </DefaultLayout>
)

export default IndexPage
