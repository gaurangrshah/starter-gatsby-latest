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

export const extras = {
  ptrn: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23adb0b6' fill-opacity='0.15'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
}

export const gradients = [
  { start: "12, 63, 172", end: "9, 49, 134" }, // 0
  { start: "15, 76, 210", end: "26, 94, 239" }, // 1
  { start: "64, 120, 242", end: "101, 146, 244" }, // 2
  { start: "106, 48, 147", end: "160, 68, 255" }, // 3
  { start: "69, 127, 202", end: "86, 145, 200" }, // 4
  { start: "194, 229, 156", end: "100, 179, 244" }, // 5
  { start: "104, 58, 183", end: "82, 45, 168" }, // 6
  { start: "0, 200, 255", end: "146, 254, 157" }, // 7
  { start: "0, 93, 151", end: "54, 56, 149" }, // 8
  { start: "251, 0, 255", end: "0, 218, 222" }, // 9
  { start: "44, 62, 80", end: "52, 152, 219" }, // 10
  { start: "48, 67, 82", end: "215, 210, 204" }, // 11
  { start: "82, 82, 82", end: "61, 115, 180" }, // 12
  { start: "241, 242, 181", end: "19, 80, 88" }, // 13
  { start: "123, 67, 151", end: "220, 36, 48" }, // 14
  { start: "142, 158, 171", end: "238, 242, 243" }, // 15
  { start: "227, 255, 231", end: "217, 231, 255" }, // 16
]

export const colors = [
  { start: "121269", end: "121269" },
  { start: "272C54", end: "272C54" },
  { start: "022550", end: "022550" },
  { start: "122C3F", end: "122C3F" },
  { start: "102342", end: "102342" },
  { start: "282A3E", end: "282A3E" },
]

export const linearGradient = (i, opacity = 0.3) =>
  `linear-gradient(90deg, rgba(${gradients[i].start}, ${opacity}) 0%, rgba(${gradients[i].end}, ${opacity}) 100%)`
