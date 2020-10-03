import React from "react"
import { Box, Button, Link as CHLink, useStyleConfig } from "@chakra-ui/core"
import { ArrowForwardIcon } from "@chakra-ui/icons"

import { Link as ReachLink } from "gatsby"
import { isExternal, isTruthy } from "../../utils"
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
  const isPathExternal = isExternal(path)
  const Link = isPathExternal || isContact ? CHLink : ReachLink
  const styles = useStyleConfig("Button", {})
  return (
    <>
      {isEnabled ? (
        <Button
          as={Link}
          isDisabled={!isEnabled}
          color="inherit"
          my={2}
          {...isTruthy(isDefault, styles?.default)}
          {...isTruthy(isMoreLink && !isContact, styles?.moreLink)}
          rightIcon={isMoreLink && <ArrowForwardIcon />}
          href={isPathExternal ? path : isContact ? path : undefined}
          to={!isPathExternal || !isContact ? path : undefined}
          target={isPathExternal ? "blank" : "self"}
          className={`wrapped-link ${isMoreLink && "more"} ${
            isDefault && "default"
          } ${isPathExternal ? "external" : "internal"} ${
            isContact && "contact"
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
