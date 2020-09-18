import React from "react"
import { Link } from "gatsby"
import { Box, Button } from "@chakra-ui/core"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

import { box, TrackingBox, Block, Content } from "../components"

const IndexPage = () => {
  return (
    <DefaultLayout pageTagline={""}>
      {/* <BackgroundImage> */}
      <Content rounded shadow my={12}>
        <Block heading="Hi People" Box="Welcome to your new Gatsby site.">
          <Button>Text One</Button>
          <p>Now go build something great.</p>
        </Block>
        <div
          style={{
            maxWidth: `300px`,
            marginTop: `120vh`,
            marginBottom: `1.45rem`,
          }}
        ></div>
        <TrackingBox
          key="box-check-1"
          presenceProps={{ initial: false }}
          initial="hidden"
          animate="visible"
          exit="hidden"
          variant={"fade-up"}
          once={false}
        >
          <Box {...box?.base} {...box?.fixedWidth} background="blue" my={4} />
        </TrackingBox>
        <Link to="/page-2/">Go to page 2</Link> <br />
        <Link to="/using-typescript/">Go to "Using TypeScript"</Link>
      </Content>
      {/* </BackgroundImage> */}
    </DefaultLayout>
  )
}

export default IndexPage
