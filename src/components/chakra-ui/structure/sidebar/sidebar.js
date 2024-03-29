import React from "react"
import { motion } from "framer-motion"

import {
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  useColorMode,
} from "@chakra-ui/core"

import { BaseContainer } from "../../layout"
import { Tabs } from "../../tabs"
import { BGIcon } from "../../../bg-icon"

import { usePanel } from "../../../../hooks/use-panel"
import { PanelContext } from "../../../../contexts/panel-context"

export const Sidebar = ({ sidebarTitle, context = PanelContext, ...rest }) => {
  const { colorMode } = useColorMode()

  const { setPanelList, panelList, kids, isOpen, onOpen, onClose } = usePanel(
    context
  )

  return (
    <>
      {kids?.length && (
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
      )}
      <Drawer isOpen={isOpen} placement="right" onClose={onClose} size={"xl"}>
        <DrawerOverlay>
          <DrawerContent
            pt={4}
            mt={12 * 2}
            pb={"5em"}
            overflow="hidden"
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
              <Tabs list={panelList} panels={kids?.length && kids[1]} />
            </DrawerBody>
          </DrawerContent>
        </DrawerOverlay>
      </Drawer>
    </>
  )
}
