import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BgImg from "gatsby-background-image"
import { Box } from "@chakra-ui/core"

export const BackgroundImage = ({ children, ...rest }) => {
  const { mobileImage, desktopImage } = useStaticQuery(graphql`
    query {
      mobileImage: file(name: { eq: "gatsby-astronaut" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 900) {
            ...GatsbyImageSharpFluid_withWebp
            aspectRatio
          }
        }
      }
      desktopImage: file(name: { eq: "gatsby-astronaut" }) {
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
  ]

  return (
    <BgImg
      id={"heroBg"}
      position="absolute"
      top={0}
      left={0}
      as={Box}
      objectFit="cover"
      backgroundSize="100% 100%"
      backgroundPosition="center 100%, center, center"
      backgroundRepeat="no-repeat"
      zIndex={-1}
      Tag={"section"}
      fluid={sources}
      {...rest}
    >
      {children}
    </BgImg>
  )
}
