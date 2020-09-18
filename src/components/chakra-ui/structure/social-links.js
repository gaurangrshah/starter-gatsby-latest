import React from "react"
import { PseudoBox, Link } from "@chakra-ui/core"
import { interactions } from "../chakra"

const defaultChannels = [
  { id: 1, label: "twitter", path: "/" },
  { id: 2, label: "linkedin", path: "/" },
  { id: 3, label: "facebook", path: "/" },
  { id: 4, label: "instagram", path: "/" },
]

export const SocialLinks = ({ channels = defaultChannels, ...rest }) => {
  return channels.map((channel, i) => (
    <Link key={i} href={channel?.path} color="inherit">
      <PseudoBox
        as="i"
        mb={3}
        pr={[6, null, null, 4]}
        className={`fab fa-${channel?.label}`}
        {...interactions?.scaleUp}
      />
    </Link>
  ))
}
