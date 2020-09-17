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

export const component = {
  header: {
    py: [6, null, null, 4],
    px: 1,
    mx: "auto",
    maxW: "90%",
    justify: ["space-between"],
    align: ["stretch", null, null, "center"],
    wrap: ["wrap", null, null, "nowrap"],
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
