import React from "react"
import { graphql, useStaticQuery } from "gatsby"
// https://markoskon.com/gatsby-background-image-example/
import { Box } from "@chakra-ui/core"

import { test, Content } from "../../chakra-ui"
import { BgImage } from "./styledBgImg"

export const BackgroundImage = ({
  height = "100%",
  overlay = "transparent",
  gradientOverlay,
  children,
  ...rest
}) => {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(name: { eq: "unsplash2" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
            aspectRatio
          }
        }
      }
      desktopImage: file(name: { eq: "unsplash2" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 4000) {
            ...GatsbyImageSharpFluid_withWebp
            aspectRatio
          }
        }
      }
    }
  `)

  const sources = [
    mobileImage?.childImageSharp?.fluid,
    {
      ...desktopImage?.childImageSharp?.fluid,
      media: `(min-width: 491px)`,
    },
  ].reverse()

  return (
    <Box
      className="bg-parent"
      position="relative"
      backgroundColor={overlay}
      backgroundImage={gradientOverlay}
      maxW="100vw"
      overflowX="hidden"
    >
      <BgImage
        Tag={"div"}
        id={"heroBg"}
        className={"heroBg"}
        title={"heroBg"}
        fluid={sources}
      >
        {children}
      </BgImage>
    </Box>
  )
}
