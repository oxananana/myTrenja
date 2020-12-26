const primary = "#000";
const secondary = "#fff";

export const theme = {
  bg: {
    base: "#fff",
    baseGrey: "#F8F8F8",
  },
  text: {
    base: primary,
    grey: "#797979",
  },
  shadow: {
    base: "0px 2px 8px rgba(0, 0, 0, 0.05)",
    baseHover: "0px 2px 10px rgba(0, 0, 0, 0.1)",
  },
  borderRadius: {
    base: "6px",
  },
  iconBtn: {
    base: "#797979",
    baseHover: primary,
  },
};

export type Theme = typeof theme;
