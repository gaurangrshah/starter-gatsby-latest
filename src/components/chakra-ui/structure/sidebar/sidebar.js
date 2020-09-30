import React, { useRef, useState, useEffect, useContext } from "react"
import { motion } from "framer-motion"

import {
  Box,
  Button,
  chakra,
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

import { PanelContext } from "../../../../contexts/panel-context"

import { usePanel } from "../../../../hooks/use-panel"
import { ZIndices } from "../../sink/z-indices"

export const Sidebar = ({ sidebarTitle, ...rest }) => {
  const { colorMode } = useColorMode()
  const { isOpen, onOpen, onClose } = useDisclosure()
  // const sidebarContext = useContext(PanelContext)
  // console.log("⭕️sidebarContext: sidebar", sidebarContext)
  // const { kids } = sidebarContext
  const { kids } = usePanel()
  console.log("⭕️kids", kids)
  return (
    <>
      <BGIcon
        as={motion.div}
        key={"sidebar-open"}
        className={"sidebar-open-btn"}
        initial={{ background: "transparent" }}
        whileHover={{ background: "blue" }}
        whileTap={{ background: "blue" }}
        transition={{ duration: 0.2 }}
        onClick={isOpen ? onClose : onOpen}
        icon="square"
        size={"2x"}
        style={{
          display: "block",
          position: "fixed",
          top: "6.5em",
          right: "2em",
          cursor: "pointer",
          zIndex: 1800,
          color: "red",
        }}
      />
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xl"}>
        <DrawerOverlay>
          <DrawerContent
            pt={4}
            mt={12 * 2}
            pb={"5em"}
            overflowY="hidden"
            maxH="85vh"
          >
            <DrawerCloseButton />
            <DrawerHeader
              border="none"
              color="white"
              bg={`mode.${colorMode}.brand`}
            >
              {sidebarTitle || "Style Guide"}
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
                list={[
                  "breakpoints",
                  "zIndices",
                  "sizes",
                  "space",
                  "colors",
                  "shadows",
                  "gradients",
                ]}
                panels={kids?.length && kids[1]}
              />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
