import { linearGradient, padding } from "./chakra"

export const MAX_WIDTH = "960px"

export const CARD_WIDTH = "240px"

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
    variant: "unstyled",
    rightIcon: "arrow-forward",
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
    px: 1,
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
    minH: ["400px", null, null, "600px"],
    maxH: "80vh",
    gradientOverlay: linearGradient(14),
  },
  heroContent: {
    color: true,
    position: "absolute",
    top: 0,
    textAlign: "left",
    ml: [12, null, null, 12 * 4],
    mt: [12, "20%", null, 12 * 4],
    maxW: MAX_WIDTH,
  },
  heroBlock: {
    shadow: true,
    position: "relative",
  },
}

export const content = {
  base: {
    w: "80%",
    maxW: MAX_WIDTH,
    mx: "auto",
  },
}

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
