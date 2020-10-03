const base = {
  py: [6, null, null, 4],
  px: [6, null, null, 1],
  mx: "auto",
  maxW: "7xl", // WRAPPER_MAX_WIDTH
  justify: ["space-between"],
  // align: ["stretch", null, null, "center"],
  wrap: ["wrap", null, null, "nowrap"],
}

const header = {
  baseStyle: {},
  sizes: {},
  variants: {
    base: {
      py: [3, null, null, 3],
      px: [6, null, null, 3],
      maxW: ["3xl", null, null, "7xl"], // WRAPPER_MAX_WIDTH
      mx: "auto",
      justifyContent: ["space-between"],
    },
    mobile: {
      display: ["flex", null, null, "none"],
      flexDirection: "column",
      align: ["stretch"],
      wrap: ["wrap"],
      py: 10,
      flex: 1,
      fontSize: "lg",
      overflow: "hidden",
    },
    desktop: {
      display: ["none", null, null, "flex"],
      flexDirection: "row",
      justifyContent: "flex-end",
      alignItems: [null, null, null, "center"],
      wrap: ["wrap", null, null, "nowrap"],
      px: 6,
      flex: 1,
      fontSize: [null, null, null, "md"],
      overflow: "hidden",
    },
  },
  defaultProps: {},
}

export default header
