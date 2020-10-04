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
  flex,
}
