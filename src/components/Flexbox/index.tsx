import { FC } from "react";
import { IWebettiFlexboxProps } from "./types";

import * as Atom from "./atoms";

const Flexbox: FC<IWebettiFlexboxProps> = ({
  align,
  direction,
  justify,
  gap,
  children,
}) => {
  return (
    <Atom.Flexbox
      align={align}
      direction={direction}
      justify={justify}
      gap={gap}
    >
      {children}
    </Atom.Flexbox>
  );
};

export default Flexbox;
