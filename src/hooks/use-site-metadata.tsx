import { graphql, useStaticQuery } from "gatsby"

type Props = {
  site: {
    siteMetadata: {
      title: string
      tagline: string
      description: string
      language: string
      siteUrl: string
      author: string
      pages: {
        label: string
        path: string
      }
      socialLinks: {
        label: string
        path: string
      }
      brandColors: {
        key: string
      }
      [key: string]: unknown
    }
  }
  file: {
    publicURL: string
  }
}

const useSiteMetadata = () => {
  const data = useStaticQuery<Props>(graphql`
    query {
      site {
        siteMetadata {
          title
          tagline
          description
          language
          siteUrl
          author
          pages {
            label
            path
          }
          socialLinks {
            label
            path
          }
          brandColors {
            primary
            secondary
          }
        }
      }
      file(name: { eq: "fingers-star" }) {
        publicURL
      }
    }
  `)
  return { ...data?.site?.siteMetadata, image: data?.file?.publicURL }
}

export default useSiteMetadata
