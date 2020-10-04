import { linearGradient } from "../../components/chakra-ui"

const hero = {
  parts: ["base", "content", "block"],
  baseStyle: {
    base: {
      h: "50vh",
      maxH: "60vh",
      background: linearGradient(14),
    },
    content: {
      position: "absolute",
      top: 0,
      right: 0,
      left: 0,
      mx: "auto",
      mt: [12 * 4, "20%", null, 12 * 4],
      maxW: ["5xl", null, null, null, "60%"],
    },
    block: {
      position: "relative",
      mx: 0,
    },
  },
  sizes: {},
  variants: {},
  defaultProps: {},
}

export default hero
