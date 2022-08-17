import { createContext, ReactNode, useContext, useMemo } from "react";
import { ThemeProvider } from "styled-components";
import { defaultTheme, IWebettiTheme } from "../theme";
import { RecursivePartial } from "../types";

const WebettiContext = createContext<{
  theme: RecursivePartial<IWebettiTheme>;
}>({
  theme: defaultTheme(),
});

const WebettiProvider = ({
  children,
  theme,
}: {
  children: ReactNode;
  theme: IWebettiTheme;
}) => {
  const themeSelect = useMemo(
    (): IWebettiTheme => theme || defaultTheme(),
    [theme]
  );

  return (
    <WebettiContext.Provider value={{ theme: themeSelect }}>
      <ThemeProvider theme={themeSelect}>{children}</ThemeProvider>
    </WebettiContext.Provider>
  );
};

const useWebettiContext = () => {
  const context = useContext(WebettiContext);
  if (context === null) {
    throw new Error("App need to use WebettiProvider");
  }
  return context;
};

export { WebettiProvider, WebettiContext, useWebettiContext };
