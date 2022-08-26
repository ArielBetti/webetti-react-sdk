import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme";
import { DevTheme, ResetCSS } from "./atoms";

const DevProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={defaultTheme()}>
      <ResetCSS />
      <DevTheme>{children}</DevTheme>
    </ThemeProvider>
  );
};

export default DevProvider;
