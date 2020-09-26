import React from "react"
import { Content } from "./layout"

import { BGIcon } from "../bg-icon"
import { Block } from "../blocks/blocks"

export const FlexCard = ({
  icon,
  text,
  content,
  link,
  truncate,
  iconConfig,
  config,
  children,
  ...rest
}) => {
  return (
    <Content
      rounded
      bg="bg4"
      color="background"
      shadow="maxbttm"
      px={4}
      py={1}
      {...rest}
    >
      <Block
        fluid
        justifyContent={"space-between"}
        {...{ text, content, link, truncate, config }}
      >
        {icon ? (
          <BGIcon
            bg={
              iconConfig?.bg
                ? iconConfig?.bg
                : icon?.bg
                ? icon?.bg
                : "mode.light.bg3"
            }
            icon={
              iconConfig?.icon
                ? iconConfig?.icon
                : icon?.icon
                ? icon?.icon
                : "circle"
            }
            size={
              iconConfig?.size
                ? iconConfig?.size
                : icon?.size
                ? icon?.size
                : "2x"
            }
            config={{ icon: { color: "inherit", ...iconConfig } }}
          />
        ) : null}
      </Block>
    </Content>
  )
}
