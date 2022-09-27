import { FC } from "react";
import * as Atom from "./atoms";
import { IWebettiDrawerProps } from "./types";

const Drawer: FC<IWebettiDrawerProps> = ({ side, children, width }) => {
  return (
    <Atom.DrawerContainer side={side} width={width}>
      {children}
    </Atom.DrawerContainer>
  );
};

export default Drawer;
