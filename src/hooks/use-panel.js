import React, { useEffect, useContext } from "react"

import { PanelContext, PanelProvider } from "../contexts/panel-context"
import { BaseContainer } from "../components"
import { useDisclosure } from "@chakra-ui/core"

const DEFAULT_CONTEXT = PanelContext
const DEFAULT_PROVIDER = PanelProvider

export const usePanel = (Context, Provider) => {
  const panelContext = useContext(Context || DEFAULT_CONTEXT)
  const { isOpen, onOpen, onClose } = useDisclosure()
  const { kids, addKids } = panelContext
  const PanelLayout = ({ children, id, kidProps, ...rest }) => {
    useEffect(() => {
      if (!children) return
      /* add children from panel layout to context */
      addKids(children, id, kidProps)
      return () => null
    }, [children, id, kidProps])
    return Context && Provider ? (
      <Provider {...rest}>
        <BaseContainer className="custom-panel-loader" />
        {/* {console.log("⭕️using custom ctx loader")} */}
      </Provider>
    ) : (
      <DEFAULT_PROVIDER {...rest}>
        <BaseContainer className="default-panel-loader" />
        {/* {console.log("⭕️ using default ctx loader")} */}
      </DEFAULT_PROVIDER>
    )
  }

  return { PanelLayout, kids, isOpen, onOpen, onClose }
}
