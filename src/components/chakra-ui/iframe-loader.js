import React from "react"
import { AspectRatio, Box } from "@chakra-ui/core"

const FrameLoader = ({ minH, src, rest }) => {
  return (
    <>
      <AspectRatio ratio={16 / 9} mx={"auto"} minH={minH}>
        <Box
          as="iframe"
          src={src}
          {...rest}
          onLoad={() => console.log("iframe-loaded")}
          scrolling="no"
        />
      </AspectRatio>
    </>
  )
}

export default FrameLoader
