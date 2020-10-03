import React from "react"
import { Link as GatsbyLink } from "gatsby"
import {
  Box,
  Button,
  useColorMode,
  useDisclosure,
  useStyleConfig,
} from "@chakra-ui/core"
import { EmailIcon } from "@chakra-ui/icons"
import { DrawerMenu } from "./drawer-menu"

import useSiteMetadata from "../../../hooks/use-site-metadata"

import { component } from "../components"

const NavLink = ({ to = "#", title = "", idx = 0, children }) => {
  const { colorMode } = useColorMode()
  const styles = useStyleConfig("Button", {})

  return (
    <Box
      className="nav-link"
      as={GatsbyLink}
      {...{ to }}
      sx={styles?.navLink}
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
  const config = { variant: "desktop" }
  const desktopNav = useStyleConfig("header", config)
  const config2 = { variant: "mobile" }
  const mobileNav = useStyleConfig("header", config2)
  const styles = useStyleConfig("Button", {})

  const navLinks = pages?.slice(1, -1)
  const links = navLinks?.slice(0, -1)
  return (
    <>
      <Box as="nav" sx={desktopNav}>
        {links?.map((link, i) => {
          return <NavLink key={i} idx={i} to={link?.path} title={link?.label} />
        })}
        <Button
          {...styles?.contactDesktop}
          as={GatsbyLink}
          to={contact?.path}
          size="sm"
          colorScheme="blue"
          textTransform="capitalize"
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
        <Box as="nav" sx={mobileNav}>
          {links?.map((link, i) => {
            return (
              <NavLink key={i} idx={i} to={link?.path} title={link?.label} />
            )
          })}
          <Button
            as={GatsbyLink}
            to={contact?.path}
            colorScheme="blue"
            textTransform="capitalize"
            // size={["sm", null, null, "lg"]}
            px={[3, null, null, 0]}
            py={[2, null, null, 0]}
            {...styles?.contactMobile}
            leftIcon={<EmailIcon />}
          >
            {contact?.label}
          </Button>
        </Box>
      </DrawerMenu>
    </>
  )
}
