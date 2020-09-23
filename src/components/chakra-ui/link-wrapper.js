import React from "react"
import { css } from "@emotion/core"
import { Box, Button, Link as CHLink, PseudoBox } from "@chakra-ui/core"

import { Link as ReachLink } from "gatsby"
import { isBoolean, isExternal, isTruthy } from "../../utils"
import { buttons } from "./components"

export const LinkWrapper = ({
  isDefault = true,
  isMoreLink = false,
  isContact,
  isEnabled,
  path,
  label = "default label",
  icon,
  children,
  ...rest
}) => {
  const Link = isExternal(path) ? CHLink : ReachLink
  return (
    <>
      {isEnabled ? (
        <Button
          as={Link}
          isDisabled={!isEnabled}
          color="inherit"
          my={2}
          {...isTruthy(isDefault, buttons.default)}
          {...isTruthy(isMoreLink && !isContact, buttons.moreLink)}
          href={isExternal(path) || isContact ? path : undefined}
          to={!isExternal(path) || !isContact ? path : undefined}
          target={isExternal(path) ? "blank" : "self"}
          className={`wrapped-link ${isMoreLink && "more"} ${
            isDefault && "default"
          }`}
          children={children || label}
          {...rest}
        />
      ) : (
        <Box as="div" className="link-removed" pointerEvents="none" {...rest}>
          {children || label}
        </Box>
      )}
    </>
  )
}
