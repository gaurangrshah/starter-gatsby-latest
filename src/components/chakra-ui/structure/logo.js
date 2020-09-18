import React from "react"
import { Link } from "gatsby"
export const Logo = ({ siteTitle, siteTagline }) => {
  return (
    <Link
      to="/"
      style={{
        color: `inherit`,
      }}
    >
      {siteTitle}
      {siteTagline}
    </Link>
  )
}
