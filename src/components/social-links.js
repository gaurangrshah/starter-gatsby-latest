import React from "react"
import { Box, Link } from "@chakra-ui/core"

const defaultChannels = [
  { id: 1, label: "twitter", path: "/" },
  { id: 2, label: "linkedin", path: "/" },
  { id: 3, label: "facebook", path: "/" },
  { id: 4, label: "instagram", path: "/" },
]

export const SocialLinks = ({ channels, ...rest }) => {
  return defaultChannels.map((channel, i) => (
    <Link key={i} href={channel.path} color="inherit">
      <Box
        as="i"
        // alignSelf="flex-start"
        pr={[2, null, null, 4]}
        mb={[2, null, 0]}
        className={`fab fa-${channel.label} scale-up`}
      />
    </Link>
  ))
}
