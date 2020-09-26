import React from "react"
import { css } from "@emotion/core"
import { Box, Button, Link as CHLink, PseudoBox } from "@chakra-ui/core"

import { Link as ReachLink } from "gatsby"
import { isBoolean, isExternal, isTruthy } from "../../utils"
import { component } from "./components"

export const LinkWrapper = ({
  isDefault = true,
  isMoreLink = false,
  isContact,
  isEnabled,
  path,
  label,
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
          {...isTruthy(isDefault, component?.buttons?.default)}
          {...isTruthy(isMoreLink && !isContact, component?.buttons.moreLink)}
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
        <Box
          as="div"
          className="link-removed"
          pointerEvents="none"
          pl={[null, null, null, 2]}
          pb={[2]}
          {...rest}
        >
          {children || label}
        </Box>
      )}
    </>
  )
}
