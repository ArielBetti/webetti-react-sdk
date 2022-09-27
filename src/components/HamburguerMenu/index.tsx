// icons
import { MdMenu, MdMenuOpen } from "react-icons/md";

// atoms: components
import * as Atom from "./atoms";

// types
import { IWebettiHamburguerMenuProps } from "./types";
import { useWebettiContext } from "../../context";

// ::
const HamburguerMenu = ({
  children,
  open,
  setOpen,
  side,
  width,
}: IWebettiHamburguerMenuProps) => {
  const { theme } = useWebettiContext();

  return (
    <>
      <Atom.HamburguerMenuToggle onClick={() => setOpen(!open)}>
        {open ? (
          <MdMenuOpen color={theme?.font?.colors?.inverse} size="20px" />
        ) : (
          <MdMenu color={theme?.font?.colors?.inverse} size="20px" />
        )}
      </Atom.HamburguerMenuToggle>
      <Atom.HamburguerMenuCollapse width={width} side={side} isOpen={open}>
        {children}
      </Atom.HamburguerMenuCollapse>
    </>
  );
};

export default HamburguerMenu;
