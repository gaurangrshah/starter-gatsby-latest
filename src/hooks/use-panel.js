import React, { useEffect, useContext } from "react"

import { PanelContext, PanelProvider } from "../contexts/panel-context"
import { BaseContainer } from "../components"
import { useDisclosure } from "@chakra-ui/core"

export const usePanel = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  const panelContext = useContext(PanelContext)
  const { kids, addKids, panelList, setPanelList } = panelContext
  const PanelLayout = ({ children, id, kidProps, list, ...rest }) => {
    useEffect(() => {
      if (!children) return
      /* add children from panel layout to context */
      addKids(children, id, kidProps)
      return () => null
    }, [children, id, kidProps])

    useEffect(() => {
      if (!list?.length) return
      setPanelList(list)
      return () => null
    }, [list])

    return (
      <PanelProvider {...rest}>
        <BaseContainer className="default-panel-loader" />
      </PanelProvider>
    )
  }

  return { PanelLayout, setPanelList, panelList, kids, isOpen, onOpen, onClose }
}
