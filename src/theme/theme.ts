const primary = "#000";

export const theme = {
  bg: {
    base: "#fff",
    baseGrey: "#F8F8F8",
    primary: primary,
  },
  text: {
    base: primary,
    baseInvert: "#fff",
    grey: "#797979",
    error: "#e82929",
  },
  border: {
    inputHover: "#e4e4e4",
    inputFocus: "#ccc",
    error: "#ffadad",
  },
  shadow: {
    base: "0px 2px 8px rgba(0, 0, 0, 0.05)",
    baseHover: "0px 2px 10px rgba(0, 0, 0, 0.1)",
    dropdown: "0 0 5px rgba(0, 0, 0, 0.1)",
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
