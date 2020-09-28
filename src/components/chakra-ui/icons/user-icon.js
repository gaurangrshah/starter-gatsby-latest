import React from "react"
import { Icon } from "@chakra-ui/core"

export const UserIcon = ({ children, ...rest }) => {
  return (
    <Icon viewBox="0 0 488.2 488.2" color="blue" {...rest}>
      <defs />
      <path
        fill="currentColor"
        d="M468.8 149.05c-12.3-29.1-29.9-55.1-52.3-77.6-22.4-22.4-48.5-40-77.6-52.3-30-12.6-62-19.1-94.9-19.1s-64.9 6.5-95 19.2c-29 12.3-55.1 29.9-77.5 52.3s-40 48.5-52.3 77.6c-12.7 30-19.2 62-19.2 94.9s6.5 64.9 19.2 95c12.3 29.1 29.9 55.2 52.3 77.6 22.4 22.4 48.5 40 77.6 52.3 30.1 12.7 62.1 19.2 95 19.2s64.9-6.5 95-19.2c29.1-12.3 55.1-29.9 77.6-52.3 22.4-22.4 40-48.5 52.3-77.6 12.7-30.1 19.2-62.1 19.2-95s-6.7-64.9-19.4-95zm-70.1 224.3c-1.9-5-5.1-9.5-9.3-12.9-39.9-32.8-83-54.6-91.8-58.9-1-.5-1.6-1.5-1.6-2.6v-62.2c7.8-5.2 13-14.1 13-24.2v-64.5c0-32.1-26-58.1-58.1-58.1h-13.8c-32.1 0-58.1 26-58.1 58.1v64.5c0 10.1 5.2 19 13 24.2v62.2c0 1.1-.6 2.1-1.6 2.6-8.8 4.3-51.8 26.1-91.8 58.9-4.2 3.5-7.4 8-9.3 12.9-29.3-35-47-80.1-47-129.3 0-111.2 90.5-201.7 201.7-201.7s201.7 90.5 201.7 201.7c0 49.2-17.6 94.3-47 129.3z"
      />
    </Icon>
  )
}
