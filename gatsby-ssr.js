import React from "react"
import { ColorModeScript } from "@chakra-ui/core"
/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it
export const onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <ColorModeScript defaultMode="light" key="chakra-ui-no-flash" />,
  ])
}
