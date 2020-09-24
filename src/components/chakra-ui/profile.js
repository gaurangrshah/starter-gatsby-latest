import React from "react"
import { Box, Image, Text } from "@chakra-ui/core"

export const profileImageStyles = {
  width: "auto",
  height: "auto",
  display: "block",
  borderRadius: "50%",
  outline: 0,
  boxShadow: "0 0 0 6px rgba(0, 123, 255, 0.5)",
}

export const imageBoxStyles = {
  width: "auto",
  height: "100%",
  borderRadius: "50%",
}

export const Profile = ({
  image = "https://i.pravatar.cc/90",
  text,
  ...rest
}) => {
  const isHeading = text && text[0]?.type === "heading"

  return image && text ? (
    <Box
      {...imageBoxStyles}
      {...rest}
      mt={{ base: "4em", lg: "1em" }}
      mx={{ base: "auto", lg: null }}
    >
      <Image
        src={image}
        // src={Images[image?.name?.split(".")[0]]}
        alt={image?.alternativeText || "profile image"}
        {...profileImageStyles}
        mx="auto"
      />
      <Text
        fontSize={["lg", null, null, "xl"]}
        fontWeight="600"
        pt="6"
        textAlign="center"
        mb="3"
      >
        {isHeading ? text[0].text : null}
      </Text>
    </Box>
  ) : null
}
