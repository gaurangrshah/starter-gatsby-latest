import React from "react"
import { Box } from "@chakra-ui/core"
import { test } from "./chakra-ui/chakra"

export const StarsStripesLeft = ({ fill, stroke, hideMobile, ...rest }) => {
  return (
    <Box
      as={"svg"}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 348 44"
      fill="none"
      display={[hideMobile ? "none" : "inline=block", null, null, "block"]}
      mx={2}
      {...rest}
    >
      <defs />
      <path stroke="#134EE2" strokeWidth="8" d="M0 6h348M0 23h348M0 40h348" />
      <path
        stroke="#5465FF"
        fill="#fff"
        strokeWidth=".5"
        d="M36 .809l4.926 15.16.056.174h16.122l-12.896 9.37-.147.106.056.173 4.927 15.16-12.897-9.369-.147-.107-.147.107-12.897 9.37 4.927-15.161.056-.173-.147-.107-12.897-9.37h16.123l.056-.172L36 .809zM89 .809l4.926 15.16.056.174h16.123l-12.897 9.37-.147.106.056.173 4.927 15.16-12.897-9.369-.147-.107-.147.107-12.896 9.37 4.925-15.161.057-.173-.147-.107-12.897-9.37h16.123l.056-.172L89 .809zM142 .809l4.926 15.16.056.174h16.123l-12.897 9.37-.147.106.056.173 4.927 15.16-12.897-9.369-.147-.107-.147.107-12.897 9.37 4.927-15.161.056-.173-.147-.107-12.897-9.37h16.123l.056-.172L142 .809z"
      />
    </Box>
  )
}

export const StarsStripesRight = ({ fill, stroke, hideMobile, ...rest }) => {
  return (
    <Box
      as={"svg"}
      viewBox="0 0 348 44"
      fill="none"
      display={[hideMobile ? "none" : "inline=block", null, null, "block"]}
      mx={2}
      {...rest}
    >
      <defs />
      <path stroke="#134EE2" strokeWidth="8" d="M0 6h348M0 23h348M0 40h348" />
      <path
        fill="#fff"
        stroke="#5465FF"
        strokeWidth=".5"
        d="M211 .809l4.926 15.16.056.174h16.123l-12.897 9.37-.147.106.056.173 4.927 15.16-12.897-9.369-.147-.107-.147.107-12.897 9.37 4.927-15.161.056-.173-.147-.107-12.897-9.37h16.123l.056-.172L211 .809zM264 .809l4.926 15.16.056.174h16.123l-12.897 9.37-.147.106.056.173 4.927 15.16-12.897-9.369-.147-.107-.147.107-12.897 9.37 4.927-15.161.056-.173-.147-.107-12.897-9.37h16.123l.056-.172L264 .809zM317 .809l4.926 15.16.056.174h16.123l-12.897 9.37-.147.106.056.173 4.927 15.16-12.897-9.369-.147-.107-.147.107-12.897 9.37 4.927-15.161.056-.173-.147-.107-12.897-9.37h16.123l.056-.172L317 .809z"
      />
    </Box>
  )
}