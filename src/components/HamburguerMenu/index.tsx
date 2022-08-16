import { useMemo } from "react";
import { ThemeProvider } from "styled-components";

// icons
import { MdMenu, MdMenuOpen } from "react-icons/md";

// atoms: components
import * as Atom from "./atoms";

// theme
import { defaultTheme, IWebettiTheme } from "../../theme";

// types
import { IWebettiHamburguerMenuProps } from "./types";

// ::
const HamburguerMenu = ({
  children,
  open,
  setOpen,
  theme,
}: IWebettiHamburguerMenuProps) => {
  // theme select
  const themeSelect = useMemo(
    (): IWebettiTheme => theme || defaultTheme(),
    [theme]
  );

  return (
    <ThemeProvider theme={themeSelect}>
      <Atom.HamburguerMenuToggle onClick={() => setOpen(!open)}>
        {open ? (
          <MdMenuOpen color={themeSelect?.font?.colors?.inverse} size="20px" />
        ) : (
          <MdMenu color={themeSelect?.font?.colors?.inverse} size="20px" />
        )}
      </Atom.HamburguerMenuToggle>
      <Atom.HamburguerMenuCollapse isOpen={open}>
        {children}
      </Atom.HamburguerMenuCollapse>
    </ThemeProvider>
  );
};

export default HamburguerMenu;
