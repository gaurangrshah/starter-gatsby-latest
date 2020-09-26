// import React from "react"

// import {  PseudoContent } from "./content"
// import { isBoolean, ptrn } from "../../utils"

// export const PseudoRow = (
//   { responsive, reverse, center, children, test, ...rest },
//   ref
// ) => (
//   <PseudoContent
//     display="flex"
//     mx="auto"
//     flexWrap={["nowrap", null, null, "wrap"]}
//     flexDirection={
//       responsive
//         ? ["column", null, null, "row"]
//         : reverse && responsive
//         ? ["column-reverse", null, null, "row-reverse"]
//         : "row"
//     }
//     alignItems={center && "center"}
//     justifyContent={center && "center"}
//     className={test && "test"}
//     zIndex={0}
//     {...rest}
//   >
//     {children}
//   </PseudoContent>
// )
