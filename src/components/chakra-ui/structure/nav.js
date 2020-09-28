import React from "react"
import { Link as GatsbyLink } from "gatsby"
import { Box, Button, useColorMode, useDisclosure } from "@chakra-ui/core"
import { EmailIcon } from "@chakra-ui/icons"
import { DrawerMenu } from "./drawer-menu"

import useSiteMetadata from "../../../hooks/use-site-metadata"

import { component } from "../components"

const NavLink = ({ to = "#", title = "", idx = 0, children }) => {
  const { colorMode } = useColorMode()
  return (
    <Box
      className="nav-link"
      as={GatsbyLink}
      {...{ to }}
      {...component.buttons?.navLink}
      _hover={{
        bg: `mode.${colorMode}.textAlt`,
        color: `mode.${colorMode}.brand`,
      }}
      children={children || title}
    />
  )
}

export const Nav = ({ siteTitle, siteTagline }) => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  const site = useSiteMetadata()
  const { pages } = site
  const { length: l, [l - 1]: contact } = pages
  // https://stackoverflow.com/questions/45801067/get-all-array-elements-except-for-first-and-last

  const navLinks = pages?.slice(1, -1)
  const links = navLinks?.slice(0, -1)
  return (
    <>
      <Box as="nav" {...component?.header?.nav?.desktop}>
        {links?.map((link, i) => {
          return <NavLink key={i} idx={i} to={link?.path} title={link?.label} />
        })}
        <Button
          {...component?.buttons?.variants?.contact?.desktop}
          as={GatsbyLink}
          to={contact?.path}
          size="sm"
          colorScheme="blue"
          leftIcon={<EmailIcon />}
        >
          {contact?.label}
        </Button>
      </Box>
      <DrawerMenu
        isOpen={isOpen}
        onOpen={onOpen}
        onClose={onClose}
        siteTitle={siteTitle}
        siteTagline={siteTagline}
      >
        <Box as="nav" {...component?.header?.nav?.mobile}>
          {links?.map((link, i) => {
            return (
              <NavLink key={i} idx={i} to={link?.path} title={link?.label} />
            )
          })}
          <Button
            {...component?.buttons.variants?.contact?.mobile}
            colorScheme="blue"
            size={["md", null, null, "lg"]}
            px={[3, null, null, 0]}
            py={[2, null, null, 0]}
            leftIcon={<EmailIcon />}
          >
            {contact?.label}
          </Button>
        </Box>
      </DrawerMenu>
    </>
  )
}
