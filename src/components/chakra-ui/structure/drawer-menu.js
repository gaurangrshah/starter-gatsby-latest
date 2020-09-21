import React, { useRef } from "react"
import {
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useColorMode,
} from "@chakra-ui/core"

import { Burger } from "./burger"
import { Logo } from "./logo"

export const DrawerMenu = ({
  isOpen,
  onOpen,
  onClose,
  children,
  siteTitle,
  siteTagline,
  ...rest
}) => {
  const { colorMode } = useColorMode()
  const ref = useRef()
  return (
    <>
      <Button
        ref={ref}
        variantColor="blue"
        onClick={isOpen ? onClose : onOpen}
        display={["inline-block", null, null, "none"]}
      >
        <Burger />
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="top"
        onClose={onClose}
        isFullHeight
        finalFocusRef={ref}
      >
        <DrawerOverlay zIndex={8} />
        <DrawerContent color={`mode.${colorMode}.background`} zIndex={9}>
          <DrawerCloseButton />
          <DrawerHeader
            border="none"
            color="inherit"
            bg={`mode.${colorMode}.brand`}
          >
            <Logo siteTitle={siteTitle} siteTagline={siteTagline} />
          </DrawerHeader>

          <DrawerBody color="inherit" bg={`mode.${colorMode}.brand`}>
            {children}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}
