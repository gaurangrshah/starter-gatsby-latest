import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import { Button, PseudoBox, useColorMode } from "@chakra-ui/core"

import { Burger } from "./burger"

import useSiteMetadata from "../hooks/use-site-metadata"

const NavLink = ({ to = "#", title = "", idx = 0, children }) => {
  const { colorMode } = useColorMode()
  return (
    <PseudoBox
      as={GatsbyLink}
      {...{ to }}
      className="nav-link"
      p={3}
      mt={{ base: 10, lg: 0 }}
      mr={{ lg: 6 }}
      mb={2}
      color="inherit"
      width={["100%", null, null, "auto"]}
      rounded="5px"
      textTransform="capitalize"
      textAlign={["right", null, null, "initial"]}
      borderBottom={["1px solid rgba(255,255,255,0.1)", null, null, "0px"]}
      whiteSpace="nowrap"
      _hover={{
        bg: `mode.${colorMode}.textAlt`,
        color: `inherit`,
      }}
    >
      {children || title}
    </PseudoBox>
  )
}

export const Nav = () => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)
  const site = useSiteMetadata()
  const { pages } = site
  const { length: l, [l - 1]: contact } = pages
  // https://stackoverflow.com/questions/45801067/get-all-array-elements-except-for-first-and-last

  const navLinks = pages.slice(1, -1)
  const links = navLinks.slice(0, -1)
  return (
    <>
      <PseudoBox
        display={{ base: show ? "flex" : "none", lg: "flex" }}
        flexDir={{ base: "column", lg: "row" }}
        justifyContent={{ base: "flex-end" }}
        w={{ base: "10%" }}
        alignItems={["flex-end", null, null, "center"]}
        mt={[4, null, null, 0]}
        ml={["auto", null, null, "initial"]}
        mr={{ base: 0, lg: 6 }}
        py={["0.3em", null, null, 0]}
        flex={1}
        fontSize={["sm", null, null, "md"]}
        overflowY={[`auto`, null, null, `initial`]} // used to overflow on smaller screens
      >
        {links?.map((link, i) => {
          return <NavLink key={i} idx={i} to={link.path} title={link.label} />
        })}
        <Button
          as={GatsbyLink}
          to={contact.path}
          bg="transparent"
          border="1px"
          textTransform="capitalize"
          color="inherit"
          borderColor={`currentColor`}
          size="sm"
          mt={{ base: 10, lg: -1 }}
          variantColor="blue"
          leftIcon="email"
        >
          {contact.label}
        </Button>
      </PseudoBox>
      <Burger handleToggle={handleToggle} />
    </>
  )
}
