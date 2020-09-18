import React, { Suspense } from "react"
import { LoadSpinner } from "./load-spinner"
import { isSSR } from "../../utils"

export const SuspenseWrapper = ({ children, ...rest }) => {
  return (
    !isSSR && (
      <Suspense fallback={<LoadSpinner {...rest} />}>{children}</Suspense>
    )
  )
}
