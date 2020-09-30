import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

import {
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/core"

import { BaseContainer } from "../../layout"
import { Tabs } from "../../tabs"
import { BGIcon } from "../../../bg-icon"
import { MapChildren } from "../../../../utils"

export const MotionButton = motion.custom(Button)

const MotionIcon = motion.custom(BGIcon)

export const Sidebar = ({ children, sidebarTitle, ...rest }) => {
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ref = useRef()

  const [kids, setKids] = useState({})

  useEffect(() => {
    setKids(
      React.Children.map(children, (child, i) => (
        <child.type key={i} {...child.props} />
      ))
    )
    return () => null
  }, [])

  useEffect(() => {
    console.log(kids)
    return () => null
  }, [kids])

  return (
    <>
      <MotionIcon
        ref={ref}
        key={"sidebar-open"}
        className={"sidebar-open-btn"}
        initial={{ background: "transparent" }}
        whileHover={{ background: "green" }}
        whileTap={{ background: "green" }}
        transition={{ duration: 0.2 }}
        onClick={isOpen ? onClose : onOpen}
        icon="square"
        size={"2x"}
        // color="blue"
        style={{
          border: "1px solid red",
          display: "block",
          position: "fixed",
          top: "6.5em",
          right: "2em",
          cursor: "pointer",
          zIndex: 1800,
          color: "red",
        }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={"xl"}
        finalFocusRef={ref}
        blockScrollOnMount={false}
      >
        <DrawerOverlay />
        <DrawerContent pt={4} mt={12 * 2}>
          <DrawerCloseButton />
          <DrawerHeader
            border="none"
            color="inherit"
            bg={`mode.${colorMode}.brand`}
          >
            Debug Console
          </DrawerHeader>

          <DrawerBody
            fluid
            position="relative"
            as={BaseContainer}
            m={0}
            p={0}
            px={12}
            top={12}
            mx={"auto"}
          >
            <Tabs
              list={["style guide", "google search"]}
              panels={[
                <MapChildren
                  kids={kids && kids}
                  newProps={{
                    rounded: true,
                    shadow: true,
                  }}
                />,
              ]}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
