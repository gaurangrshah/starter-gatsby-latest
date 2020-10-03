const Button = {
  baseStyle: {
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
    contactMobile: {
      color: "inherit",
      bg: "transparent",
      border: "1px",
      borderColor: "currentColor",
      ml: "auto",
      mt: 8,
      size: ["2xs", null, null],
    },
    contactDesktop: {
      color: "inherit",
      bg: "transparent",
      border: "1px",
      borderColor: "currentColor",
      textTransform: "capitalize",
      mt: -1,
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
  },
}

export default Button
