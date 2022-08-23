import { ReactNode } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "../theme";
import { ResetCSS } from "./atoms";

const DevProvider = ({ children }: { children: ReactNode }) => {
  return (
    <ThemeProvider theme={defaultTheme()}>
      <ResetCSS />
      {children}
    </ThemeProvider>
  );
};

export default DevProvider;
