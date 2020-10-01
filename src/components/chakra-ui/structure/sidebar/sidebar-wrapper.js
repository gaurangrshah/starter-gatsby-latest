import React from "react"
import { usePanel } from "../../../../hooks/use-panel"

export const SidebarContextWrapper = ({ children, ...rest }) => {
  const { PanelLayout } = usePanel()
  return <PanelLayout {...rest}>{children}</PanelLayout>
}
