export const test = (color = "red", width = 2) => ({
  border: `${width}px solid ${color}`,
})

export const padding = {
  default: {
    py: 10,
    px: 5,
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

export const button = {
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
  buttons: {
    contact: {
      mobile: {
        ...button?.contact,
        ml: "auto",
        mt: 12,
      },
      desktop: {
        ...button?.contact,
        mt: -1,
      },
    },
  },
}

export const component = {
  header: {
    py: [6, null, null, 4],
    px: 1,
    mx: "auto",
    maxW: "90%",
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
}

export const interactions = {
  scaleUp: {
    transform: [`scale(1.2)`, null, null, `scale(0.8)`],
    transition: "transform 0.3s ease-in",
    _hover: {
      cursor: "pointer",
      transform: [`scale(1.3)`, null, null, `scale(1)`],
      transition: "transform 0.2s ease-out",
    },
  },
}
