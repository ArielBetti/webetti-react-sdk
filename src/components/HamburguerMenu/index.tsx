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
      <Atom.HamburguerMenuCollapse isOpen={open}>
        {children}
      </Atom.HamburguerMenuCollapse>
    </>
  );
};

export default HamburguerMenu;
