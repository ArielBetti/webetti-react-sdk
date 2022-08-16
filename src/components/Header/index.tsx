import { useEffect, useMemo, useState } from "react";
import { ThemeProvider } from "styled-components";

// hooks
import { useWindowDimensions } from "../../hooks";

// components
import { Container } from "../Container";

// types
import { IWebettiHeaderProps } from "./types";
import { IWebettiTheme } from "../../theme/types";

// atom: components
import * as Atom from "./atoms";

// theme
import { defaultTheme } from "../../theme/default";

// ::
const Header = ({
  children,
  theme,
  trackHeaderActive,
}: IWebettiHeaderProps) => {
  // local: states
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const { width } = useWindowDimensions();

  // theme select
  const themeSelect = useMemo(
    (): IWebettiTheme => theme || defaultTheme(),
    [theme]
  );

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  useEffect(() => {
    if (width > themeSelect?.breakpoints?.md.replace("px", "")) {
      setMenuToggle(false);
    }
  }, [theme?.breakpoints?.md, width]);

  return (
    <ThemeProvider theme={themeSelect}>
      <Atom.NavigationContainer>
        <Atom.NavigationItems
          hasHamburguerOpen={trackHeaderActive || menuToggle}
          setBackground={scrollValue > 10}
        >
          <Container>
            <Atom.NavigationExtends>{children}</Atom.NavigationExtends>
          </Container>
        </Atom.NavigationItems>
      </Atom.NavigationContainer>
    </ThemeProvider>
  );
};

export default Header;
