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
    }
  `)
  // console.log(data.site.siteMetadata)
  return data.site.siteMetadata
}

export default useSiteMetadata
