import React, { useEffect, useState } from "react";
import { ThemeProvider } from "styled-components";

// hooks
import { useWindowDimensions } from "../../hooks";


// components
import { Container } from "../Container";

// types
import { IWebettiHeaderProps } from "./types";

// atom: components
import * as Atom from "./atoms";

const Header = ({ theme, children }: IWebettiHeaderProps) => {
  // local: states
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  const { width } = useWindowDimensions();

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  useEffect(() => {
    if (width > theme?.breakpoints?.md.replace("px", "")) {
      setMenuToggle(false);
    }
  }, [theme?.breakpoints?.md, width]);

  return (
    <ThemeProvider theme={theme}>
      <Atom.NavigationContainer>
        <Atom.NavigationItems
          hasHamburguerOpen={menuToggle}
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
