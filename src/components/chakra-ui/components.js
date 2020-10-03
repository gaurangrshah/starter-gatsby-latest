/*
* highlight and Press cmd+D
component = {
  buttons,
  box,
  flex,
}
*/

// const buttons = {
//   default: {
//     border: "none",
//     variant: "solid",
//     colorScheme: "blue",
//     color: "white",
//     textAlign: "left",
//     pl: 2, // 0.5rem
//     _hover: {
//       textDecoration: "none",
//       border: "1px solid currentColor",
//     },
//   },
//   moreLink: {
//     mt: 4, // 1rem
//     ml: "20%",
//     p: 2, // 0.5rem
//     variant: "solid",
//     colorScheme: "teal",
//     rightIcon: "arrow-forward",
//     size: ["xs", null, "md"],
//   },
//   contact: {
//     color: "inherit",
//     bg: "transparent",
//     border: "1px",
//     borderColor: "currentColor",
//     textTransform: "capitalize",
//   },
//   navLink: {
//     w: ["full", null, null, "auto"],
//     p: 3,
//     mt: [10, null, null, 0], //  [2.5rem, null, null, 0]
//     mr: [null, null, null, 6], // [null, null, null, 1.5rem]
//     mb: 2,
//     color: "inherit",
//     rounded: "5px",
//     textTransform: "capitalize",
//     textAlign: ["right", null, null, "initial"],
//     borderBottom: ["1px solid rgba(255,255,255,0.1)", null, null, "0px"],
//     whiteSpace: "nowrap",
//   },
// }

// buttons.variants = {
//   contact: {
//     mobile: {
//       ...buttons?.contact,
//       ml: "auto",
//       mt: 12, // 3rem
//     },
//     desktop: {
//       ...buttons?.contact,
//       mt: -1, // -0.25rem
//     },
//   },
// }

const flex = {
  rowBetween: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    mx: "auto",
  },
  columnCenter: {
    display: "flex",
    flexDirection: "column",
    justifyContent: ["center", null, null, "space-between"],
    alignItems: "center",
  },
  columnContentFull: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  col3Flex: {
    maxW: ["full", null, null, "33%"],
    flex: 1,
  },
  col2Flex: {
    maxW: ["full", null, null, "45%"],
    flex: 1,
  },
  flex23: [
    { maxW: ["full", null, null, "66%"], flex: 1 },
    { maxW: ["full", null, null, "33%"], flex: 0 },
  ],
  flex6040: [
    { maxW: ["full", null, null, "60%"], flex: 1 },
    { maxW: ["full", null, null, "40%"], flex: 0 },
  ],
  flex8020: [
    { maxW: ["full", null, null, "80%"], flex: 1 },
    { maxW: ["full", null, null, "20%"], flex: 0 },
  ],
}

// const box = {
//   fixedWidth: {
//     color: "inherit",
//     w: "full",
//     maxW: ["80%", null, null, "5xl"], // ["80%", null, null, "64rem"]
//     mx: "auto",
//   },
//   base: {
//     color: "inherit",
//     w: "200px",
//     h: "200px",
//   },
//   absoluteCenter: {
//     position: "absolute",
//     bottom: 0,
//     left: 0,
//     right: 0,
//     w: "full",
//     mx: "auto",
//   },
// }

export const sinkDefault = min => ({
  bg: "mode.light.bg4",
  color: "white",
  shadow: "maxbttm",
  border: "1px",
  boxSizing: "border-box",
  minH: min && 48,
  minW: min && 48,
})

export const component = {
  // buttons,
  // box,
  flex,
}
