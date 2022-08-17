import { useEffect, useMemo, useState } from "react";

// hooks
import { useWindowDimensions } from "../../hooks";

// components
import { Container } from "../Container";

// types
import { IWebettiHeaderProps } from "./types";

// atom: components
import * as Atom from "./atoms";

// theme
import { useWebettiContext } from "../../context";

// ::
const Header = ({ children, trackHeaderActive }: IWebettiHeaderProps) => {
  // local: states
  const [scrollValue, setScrollValue] = useState<number>(0);
  const [menuToggle, setMenuToggle] = useState<boolean>(false);

  // context
  const { theme } = useWebettiContext();

  const { width } = useWindowDimensions();

  useEffect(() => {
    const onScroll = (e: any) => {
      setScrollValue(e.target.documentElement.scrollTop);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, [scrollValue]);

  useEffect(() => {
    if (width > theme?.breakpoints?.md?.replace("px", "")) {
      setMenuToggle(false);
    }
  }, [theme?.breakpoints?.md, width]);

  return (
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
  );
};

export default Header;
