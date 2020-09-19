import { theme as baseTheme } from "@chakra-ui/core"

const theme = {
  ...baseTheme,
  colors: {
    ...baseTheme.colors,
    blue: {
      50: "hsl(229, 66%, 96%)",
      100: "hsl(230, 67%, 90%)",
      200: "hsl(230, 68%, 80%)",
      300: "hsl(230, 69%, 74%)",
      400: "hsl(230, 70%, 66%)",
      500: "hsl(231, 71%, 61%)",
      600: "hsl(232, 72%, 56%)",
      700: "hsl(233, 73%, 51%)",
      800: "hsl(235, 74%, 46%)",
      900: "hsl(237, 75%, 41%)",
    },
    brand: {},
    defaults: {
      warning: "#f5e050", // minion yellow
      danger: "#db2b39", // rose madder
      success: "#7bc950", // mantis
      transparent: {
        100: "rgba(0,0,0,1)",
        90: "rgba(0,0,0,.9)",
        80: "rgba(0,0,0,.8)",
        70: "rgba(0,0,0,.7)",
        60: "rgba(0,0,0,.6)",
        50: "rgba(0,0,0,.5)",
        40: "rgba(0,0,0,.4)",
        30: "rgba(0,0,0,.3)",
        20: "rgba(0,0,0,.2)",
        10: "rgba(0,0,0,.1)",
        5: "rgba(0,0,0,.05)",
        1: "rgba(0,0,0,.01)",
        0: "rgba(0,0,0,0)",
      },
    },
    mode: {
      light: {
        brand: "#0C3FAC", // blue denim
        alt: "#093186", // cosmic cobalt
        alt2: "#0F4CD2", // cerulean blue
        alt3: "#1A5EEF", // bluetiful
        cardBG: "#4078F2", // blue crayola
        cardBG2: "#6592F4", // cornflower blue
        icon: "#000", // cadet blue crayola

        text: "#2b4054", // charcoal
        textAlt: "#C9D7E3", // beau blue
        heading: "#0F4CD2", //
        navlink: "#FFFFFF", //
        navlinkActive: "##F8F8FF", //
        navlinkHover: "#EBEBFF", //
        link: "#00a6ff", // blue jeans

        background: "#FFFFFF", // white
        bg: "#D9E4FD", // baby blue eyes
        bg2: "#8DAEF7", // french sky blue
        bg3: "#5687F3", // united nations blue
        bg4: "#0650EF", // blue ryb
        transparent: "rgba(255,255,255,0)",
      },
      dark: {
        brand: "#00072D", // oxford blue
        alt: "#000C52", // midnight blue
        alt2: "#00127A", // phthalo blue
        alt3: "#0018A3", // zaffre
        cardBG: "#8DE2D4", // middle blue green
        cardBG2: "#939CDC", // maximum blue purple
        text: "#C9D7E3", // beau blue
        textAlt: "#C3EFBD", // tea green
        heading: "#2b4054", // charcoal
        icon: "#3C5168", // independence
        navlink: "#FFFFFF", //
        navlinkActive: "##F8F8FF", //
        navlinkHover: "#EBEBFF", //
        link: "#006aa3", // sapphire blue
        background: "#00072D", // oxford blue
        bg: "#001C55", // royal blue dark
        bg2: "#363960", // space cadet
        bg3: "#434878", // purple navy
        bg4: "#555B9B", // liberty
        transparent: "rgba(0,0,0,0)",
      },
    },
  },
  fonts: {
    ...baseTheme.fonts,
    body: `"Encode Sans", sans-serif`,
  },
  space: {
    ...baseTheme.space,
  },
  shadows: {
    ...baseTheme.shadows,
    default: "0px 1px 0px 0px rgba(9,30,66,.25)",
    max: "0 1px 5px rgba(0, 0, 0, 0.15)",
    inset: "0 1px 4px rgba(0, 0, 0, 0.3), 0 0 40px rgba(0, 0, 0, 0.1) inset",
    maxbttm: "0 8px 8px -6px rgba(0,0,0,.25)",
    maxtop: "0px 0px 4px 5px rgba(0, 0, 0, 0.15)",
    minbttm: "0 0 10px 2px rgba(0,0,0,.25)",
    smdarkbox: "0 4px 4px 0 rgba(0,0,0,.1)",
    smlightbox: "0 4px 4px 0 rgba(0,0,0,.05)",
  },
}

export default theme
