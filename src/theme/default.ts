import { IWebettiTheme } from "./types";

export const defaultTheme = (): IWebettiTheme => ({
  colors: {
    background: "#FAFAFA",
    neutral: {
      pure: "#f5f5f5",
      1: "#eeeeee",
      2: "#e0e0e0",
      3: "#aeaeae",
    },
    primary: "#ff8a80",
    secondary: "#d81b60",
    feedback: {
      error: "#cc0000",
      warning: "#ff8800",
      success: "#007e33",
      info: "#0d47a1",
    },
  },
  font: {
    colors: {
      contrast: "#1e88e5",
      1: "#212121",
      2: "#1b1b1b",
      3: "#424242",
      dark: "#000",
      white: "#FFF",
      inverse: "#FFF",
      pure: "#000",
    },
  },
  breakpoints: {
    xsm: "360px",
    sm: "576px",
    md: "768px",
    lg: "992px",
    xl: "1350px",
  },
  transitions: {
    time: "0.3s",
    type: "ease",
  },
  spacing: {
    xxxs: "4px",
    xxs: "8px",
    xs: "16px",
    sm: "24px",
    md: "32px",
    lg: "40px",
    xl: "48px",
    xxl: "56px",
    xxxl: "64px",
  }
});
