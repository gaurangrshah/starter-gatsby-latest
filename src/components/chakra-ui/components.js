import { linearGradient, padding } from "./chakra"

export const MAX_CONTENT_WIDTH = "70%"
export const MAX_WIDTH = [MAX_CONTENT_WIDTH, null, null, null, "50%"]
export const WRAPPER_MAX_WIDTH = "1230px"

export const CARD_WIDTH = "220px"
export const CARD_WIDTH_LG = "280px"

export const buttons = {
  default: {
    border: "none",
    variant: "solid",
    variantColor: "blue",
    color: "white",
    textAlign: "left",
    pl: 2,
    _hover: {
      textDecoration: "none",
      border: "1px solid currentColor",
    },
  },
  moreLink: {
    mt: 4,
    ml: "20%",
    p: 2,
    variant: "solid",
    variantColor: "teal",
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
    w: ["100%", null, null, "auto"],
    p: 3,
    mt: [10, null, null, 0],
    mr: [null, null, null, 6],
    mb: 2,
    color: "inherit",
    rounded: "5px",
    textTransform: "capitalize",
    textAlign: ["right", null, null, "initial"],
    borderBottom: ["1px solid rgba(255,255,255,0.1)", null, null, "0px"],
    whiteSpace: "nowrap",
  },
}

export const buttonVariants = {
  contact: {
    mobile: {
      ...buttons?.contact,
      ml: "auto",
      mt: 12,
    },
    desktop: {
      ...buttons?.contact,
      mt: -1,
    },
  },
}

export const component = {
  header: {
    py: [6, null, null, 4],
    px: [6, null, null, 1],
    mx: "auto",
    maxW: MAX_WIDTH,
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
  },
  footer: {
    color: "inherit",
    maxW: MAX_WIDTH,
    w: "90%",
    h: "2.5rem",
    mx: "auto",
    ...padding.default,
    display: "flex",
    flexDirection: ["column", null, null, "initial"],
    justifyContent: ["center", null, null, "space-between"],
    alignItems: "center",
    textAlign: ["center", null, null, "left"],
  },
  hero: {
    minH: ["200px", null, null, "600px"],
    maxH: "60vh",
    gradientOverlay: linearGradient(14),
  },
  heroContent: {
    color: true,
    position: "absolute",
    top: 0,
    right: 0,
    left: 0,
    mx: "auto",
    mt: [6, "20%", null, 12 * 4],
    maxW: MAX_WIDTH,
  },
  heroBlock: {
    shadow: true,
    position: "relative",
  },
}

// export const content = {
//   base: {
//     position: "relative",
//     w: "100%",
//     mx: "auto",
//     zIndex: 0,
//   },
// }

export const flex = {
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
    textAlign: "center",
    mx: "auto",
  },
  col3Flex: {
    maxW: ["100%", null, "33%"],
  },
  col2Flex: {
    maxW: ["100%", null, "50%"],
  },
  flex23: [
    {
      maxW: ["100%", null, "66%"],
    },
    {
      maxW: ["100%", null, "33%"],
    },
  ],
  flex6040: [
    {
      maxW: ["100%", null, null, "60%"],
    },
    {
      maxW: ["100%", null, null, "40%"],
    },
  ],
  flex8020: [
    {
      maxW: ["100%", null, null, "80%"],
    },
    {
      maxW: ["100%", null, null, "20%"],
    },
  ],
}

export const box = {
  fixedWidth: {
    color: "inherit",
    w: "100%",
    maxW: ["80%", null, null, "1050px"],
    mx: "auto",
  },
  base: {
    color: "inherit",
    w: "200px",
    h: "200px",
  },
}
