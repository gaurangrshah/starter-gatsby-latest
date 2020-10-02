/* eslint-disable */
import React, { useState, useEffect, useRef } from "react"

import { Box, useToast } from "@chakra-ui/core"
import { mapChildren } from "../tools"

export const Bugger = ({ debug, children, ...rest }) => {
  const [showToast, setShowToast] = useState(false)

  const toastRef = useRef(null)
  const toast = useToast()
  // const close = () => toastRef.current && toast.close(toastRef.current)
  // const closeAll = () => toast.closeAll()
  const addToast = content => (toastRef.current = toast({ ...content }))

  const ToastDescription = ({ child }) => (
    <Box>
      <pre>
        <code>{`childProps: ${JSON.stringify(child?.props)}`}</code>
      </pre>
      <pre>
        <code>{`childType: ${JSON.stringify(child?.type)}`}</code>
      </pre>
      <pre>
        {rest?.length &&
          rest.map((r, i) => {
            return <code>{`rest-${i}: ${JSON.stringify(r, null, 2)}`}</code>
          })}
      </pre>
    </Box>
  )

  const BugWrapper = ({ children, ...rest }) => {
    const wrapRef = useRef(null)
    const [kids, setKids] = useState(false)
    useEffect(() => {
      if (!children) return
      setKids(
        React.Children.map(children, child => {
          showToast &&
            addToast({
              title: "🐞 debug toast:",
              description: <ToastDescription child={child} />,
              status: "success",
              duration: 9000,
              isClosable: true,
              position: "bottom-right",
            })
          return child
        })
      )

      return () => null
    }, [children])
    useEffect(() => {
      if (!kids?.length) return
      // console.log('⭕️ setKids, bugger', kids)
      setShowToast(true)
      return () => null
    }, [kids])

    return (
      <>
        <div ref={wrapRef} style={{ ...rest }}>
          {children}
        </div>
      </>
    )
  }

  useEffect(() => {
    if (!children || toastRef?.current) return
    mapChildren(true, children, { boder: "3px solid blue" }, BugWrapper)
    return () => null
  }, [children, BugWrapper])

  return <BugWrapper>{children}</BugWrapper>
}
