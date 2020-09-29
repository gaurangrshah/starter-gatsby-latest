import { test, linearGradient, padding } from "./chakra"

/*
* highlight and Press cmd+D
component = {
  hero,
  header,
  footer,
  buttons,
  box,
  flex,
}
*/

const MAX_CONTENT_WIDTH = "5xl"
const MAX_WIDTH = [MAX_CONTENT_WIDTH, null, null, null, "60%"]
const WRAPPER_MAX_WIDTH = "7xl"

const CARD_WIDTH = "3xs"
const CARD_WIDTH_LG = 32 * 2

export const constants = {
  MAX_WIDTH: MAX_WIDTH,
  MAX_CONTENT_WIDTH: MAX_CONTENT_WIDTH,
  WRAPPER_MAX_WIDTH: WRAPPER_MAX_WIDTH,
  CARD_WIDTH: CARD_WIDTH,
  CARD_WIDTH_LG: CARD_WIDTH_LG,
}

const buttons = {
  default: {
    border: "none",
    variant: "solid",
    colorScheme: "blue",
    color: "white",
    textAlign: "left",
    pl: 2, // 0.5rem
    _hover: {
      textDecoration: "none",
      border: "1px solid currentColor",
    },
  },
  moreLink: {
    mt: 4, // 1rem
    ml: "20%",
    p: 2, // 0.5rem
    variant: "solid",
    colorScheme: "teal",
    rightIcon: "arrow-forward",
    size: ["xs", null, "md"],
  },
  contact: {
    color: "inherit",
    bg: "transparent",
    border: "1px",
    borderColor: "currentColor",
    textTransform: "capitalize",
  },
  navLink: {
    w: ["full", null, null, "auto"],
    p: 3,
    mt: [10, null, null, 0], //  [2.5rem, null, null, 0]
    mr: [null, null, null, 6], // [null, null, null, 1.5rem]
    mb: 2,
    color: "inherit",
    rounded: "5px",
    textTransform: "capitalize",
    textAlign: ["right", null, null, "initial"],
    borderBottom: ["1px solid rgba(255,255,255,0.1)", null, null, "0px"],
    whiteSpace: "nowrap",
  },
}

buttons.variants = {
  contact: {
    mobile: {
      ...buttons?.contact,
      ml: "auto",
      mt: 12, // 3rem
    },
    desktop: {
      ...buttons?.contact,
      mt: -1, // -0.25rem
    },
  },
}

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
    {
      maxW: ["full", null, null, "66%"],
      flex: 1,
    },
    {
      maxW: ["full", null, null, "33%"],
      flex: 0,
    },
  ],
  flex6040: [
    {
      maxW: ["full", null, null, "60%"],
      flex: 1,
    },
    {
      maxW: ["full", null, null, "40%"],
      flex: 0,
    },
  ],
  flex8020: [
    {
      maxW: ["full", null, null, "80%"],
      flex: 1,
    },
    {
      maxW: ["full", null, null, "20%"],
      flex: 0,
    },
  ],
}

const box = {
  fixedWidth: {
    color: "inherit",
    w: "full",
    maxW: ["80%", null, null, "5xl"], // ["80%", null, null, "64rem"]
    mx: "auto",
  },
  base: {
    color: "inherit",
    w: "200px",
    h: "200px",
  },
  absoluteCenter: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    w: "full",
    // mx: "auto",
    my: "auto",
  },
}

const header = {
  py: [6, null, null, 4],
  px: [6, null, null, 1],
  mx: "auto",
  maxW: WRAPPER_MAX_WIDTH,
  justify: ["space-between"],
  align: ["stretch", null, null, "center"],
  wrap: ["wrap", null, null, "nowrap"],
  nav: {
    mobile: {
      display: ["flex", null, null, "none"],
      flexDirection: "column",
      justifyContent: "flex-end",
      ml: "auto",
      mr: 6,
      mt: 6,
      flex: 1,
      fontSize: "lg",
      overflow: "hidden",
    },
    desktop: {
      display: ["none", null, null, "flex"],
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: [null, null, null, "center"],
      ml: [null, null, null, "initial"],
      mr: 6,
      flex: 1,
      fontSize: [null, null, null, "md"],
      overflow: "hidden",
    },
  },
}

const footer = {
  color: "inherit",
  maxW: WRAPPER_MAX_WIDTH,
  h: ["auto", null, null, "2.5rem"],
  mx: "auto",
  ...padding?.default,
  display: "flex",
  flexDirection: ["column", null, null, "initial"],
  justifyContent: ["space-between", null, null, "space-between"],
  alignItems: "center",
  textAlign: ["center", null, null, "left"],
}

const hero = {
  maxH: "60vh",
  gradientOverlay: linearGradient(14),
  content: {
    color: true,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    mx: "auto",
    mt: [12 * 4, "20%", null, 12 * 4],
    maxW: MAX_WIDTH,
  },
  block: {
    shadow: true,
    position: "relative",
  },
}

export const component = {
  header,
  footer,
  hero,
  buttons,
  box,
  flex,
}
