import React from "react"
import { usePanel } from "../../../../hooks/use-panel"

import { PanelContext, PanelProvider } from "../../../../contexts/panel-context"

export const SidebarContextWrapper = ({ children, ...rest }) => {
  const { PanelLayout } = usePanel(PanelContext, PanelProvider)
  return <PanelLayout {...rest}>{children}</PanelLayout>
}
