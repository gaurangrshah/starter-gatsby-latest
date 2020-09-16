import React from "react"
import { AspectRatioBox, Box } from "@chakra-ui/core"

const FrameLoader = ({ src, iframeprops }) => {
  return (
    <>
      <AspectRatioBox ratio={16 / 9} mx={"auto"} maxH="500px">
        <Box
          as="iframe"
          src={src}
          {...iframeprops}
          onLoad={() => console.log("iframe-loaded")}
          scrolling="no"
        />
      </AspectRatioBox>
    </>
  )
}

export default FrameLoader
