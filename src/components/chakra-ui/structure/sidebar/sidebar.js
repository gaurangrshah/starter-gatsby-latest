import React, { useRef, useContext } from "react"
import {
  Button,
  Divider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useColorMode,
  useDisclosure,
} from "@chakra-ui/core"
import { MotionButton } from "../../../motion"
import { box } from "../../chakra"

export const Sidebar = ({ children, sidebarTitle, ...rest }) => {
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const ref = useRef()
  return (
    <>
      <MotionButton
        ref={ref}
        key={"sidebar-open"}
        initial={{ color: "transparent" }}
        whileHover={{ color: "green" }}
        whileTap={{ color: "green" }}
        transition={{ duration: 0.2 }}
        onClick={isOpen ? onClose : onOpen}
        display={["block"]}
        position="fixed"
        bottom={0}
        right={0}
        cursor="pointer"
        w={100}
        h={100}
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
            {children}

            <iframe
              is="x-frame-bypass"
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
