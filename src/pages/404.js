import React from "react"

import DefaultLayout from "../gatsby-plugin-chakra-ui/layouts/default"

const NotFoundPage = () => (
  <DefaultLayout seo={{ siteTitle: "404", siteTagline: "Page Not Found" }}>
    <h1>NOT FOUND</h1>
    <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
  </DefaultLayout>
)

export default NotFoundPage
