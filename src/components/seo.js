/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import Helmet from "react-helmet"
import useSiteMetadata from "../hooks/use-site-metadata"

const defaultProps = {
  title: ``,
  tagline: ``,
  description: ``,
  meta: [],
  pathname: ``,
  image: ``,
  children: null,
}

const SEO = ({
  siteTitle,
  siteTagline,
  siteDescription,
  meta,
  pathname,
  image,
  children,
}) => {
  const site = useSiteMetadata()

  const { title, tagline, description, language, siteUrl, author } = site

  const seo = {
    title: siteTitle || title,
    tagline: siteTagline || tagline,
    description: siteDescription || description,
    url: `${siteUrl}${pathname || ``}`,
    image: `${siteUrl}${image}`,
  }
  return (
    <Helmet
      title={seo.title}
      defaultTitle={siteTitle}
      htmlAttribute={{
        lang: language,
      }}
      titleTemplate={`%s | ${seo.tagline}`}
      meta={[
        {
          name: `description`,
          content: seo.description,
        },
        {
          name: `image`,
          content: seo.image,
        },
        {
          name: `og:title`,
          content: seo.title,
        },
        {
          name: `og:url`,
          content: seo.url,
        },
        {
          name: `og:description`,
          content: seo.description,
        },
        {
          name: `og:image`,
          content: seo.image,
        },
        {
          name: `og:type`,
          content: "website",
        },
        {
          name: `og:image:alt`,
          content: seo.description,
        },
        {
          name: `twitter:card`,
          content: "summary_large_image",
        },
        {
          name: `twitter:title`,
          content: seo.title,
        },
        {
          name: `twitter:url`,
          content: seo.url,
        },
        {
          name: `twitter:description`,
          content: seo.description,
        },
        {
          name: `twitter:image`,
          content: seo.image,
        },
        {
          name: `twitter:image:alt`,
          content: seo.description,
        },
        {
          name: `twitter:creator`,
          content: author,
        },
      ].concat(meta)}
    >
      <link
        rel="icon"
        type="image/png"
        sizes="32x32"
        href="/favicon-32x32.png"
      />
      <link
        rel="icon"
        type="image/png"
        sizes="16x16"
        href="/favicon-16x16.png"
      />
      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href="/apple-touch-icon.png"
      />

      {children}
      <script
        async
        // src="https://kit.fontawesome.com/900da20747.js"
        src="https://kit.fontawesome.com/888120ac6d.js"
        crossOrigin="anonymous"
        SameSite="None"
        Secure
      />
      <script src="https://unpkg.com/@ungap/custom-elements-builtin" />
      <script type="module" src="https://unpkg.com/x-frame-bypass" />
    </Helmet>
  )
}

export default SEO

SEO.defaultProps = defaultProps
