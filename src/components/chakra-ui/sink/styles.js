import React from "react"

import { colors, shadows } from "../../../../theme.json"
import { Colors } from "./colors"
import { Shadows } from "./shadows"

export const Styles = () => {
  return (
    <>
      <Colors colors={colors} />
      <Shadows shadows={shadows} />
    </>
  )
}
