import React, { useRef, useState, useEffect } from "react"
import { motion } from "framer-motion"

import {
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

export const MotionButton = motion.custom(Button)

export const Sidebar = ({ children, sidebarTitle, ...rest }) => {
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ref = useRef()

  const [state, setState] = useState({})

  useEffect(() => {
    setState(React.Children.map(children, (child, i) => child))
    return () => null
  }, [])

  useEffect(() => {
    console.log(state)
    return () => null
  }, [state])

  return (
    <>
      <motion.button
        ref={ref}
        key={"sidebar-open"}
        className={"sidebar-open-btn"}
        initial={{ background: "yellow" }}
        whileHover={{ background: "green" }}
        whileTap={{ background: "green" }}
        transition={{ duration: 0.2 }}
        onClick={isOpen ? onClose : onOpen}
        style={{
          border: "1px solid red",
          display: "block",
          position: "fixed",
          top: "40em",
          right: 0,
          cursor: "pointer",
          zIndex: 1800,
          w: 100,
          h: 100,
        }}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        size={"xl"}
        finalFocusRef={ref}
      >
        <DrawerOverlay />
        <DrawerContent color={`mode.${colorMode}.background`}>
          <DrawerCloseButton />
          <DrawerHeader
            border="none"
            color="inherit"
            bg={`mode.${colorMode}.brand`}
          >
            Debug Console
          </DrawerHeader>

          <DrawerBody color="inherit" mt={8} pt={4}>
            {state}
            <iframe
              is="x-frame-bypass"
              title="sidebarframe"
              src={"https://google.com/search?igu=1"}
              width="100%"
              height="100%"
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
