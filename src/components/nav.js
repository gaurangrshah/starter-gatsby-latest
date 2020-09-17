import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import { Button, PseudoBox, useColorMode } from "@chakra-ui/core"

import { Burger } from "./burger"

import useSiteMetadata from "../hooks/use-site-metadata"
import { PseudoMotionBox, MotionButton } from "./motion/motion"

const linksVariants = {
  hidden: { opacity: 0, x: -150 },
  visible: { opacity: 1, x: 0 },
}

const navVaraints = {
  hidden: {
    opacity: 0,
    scaleY: -100,
  },
  visible: {
    opacity: 1,
    scaleY: 0,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.2,
    },
  },
  exit: {
    transition: {
      when: "afterChildren",
      staggerChildren: 0.2,
    },
  },
}

const NavLink = ({ to = "#", title = "", idx = 0, children }) => {
  const { colorMode } = useColorMode()
  return (
    <PseudoMotionBox
      key="nav-link"
      layoutId="nav-link"
      // transformOrigin="top right"
      initial="hidden"
      animate="visible"
      exit="hidden"
      variants={linksVariants}
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
      children={children || title}
    />
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
      <PseudoMotionBox
        key="nav"
        layout
        // initial="hidden"
        // animate="visible"
        // exit="hidden"
        variants={navVaraints}
        transition={{
          opacity: "linear",
          y: { duration: 0.2, delay: 0.1 },
        }}
        transition={{ delay: 0.2, duration: 0.3 }}
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
        overflow="hidden"
        // overflowY={[`auto`, null, null, `initial`]} // used to overflow on smaller screens
      >
        {links?.map((link, i) => {
          return <NavLink key={i} idx={i} to={link.path} title={link.label} />
        })}
        <MotionButton
          key="nav-contact"
          layoutId="nav-contact"
          variants={linksVariants}
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
        </MotionButton>
      </PseudoMotionBox>
      <Burger handleToggle={handleToggle} />
    </>
  )
}
