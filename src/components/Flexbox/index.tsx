import { FC } from "react";
import { IWebettiFlexboxProps } from "./types";

import * as Atom from "./atoms";

const Flexbox: FC<IWebettiFlexboxProps> = ({
  align,
  children,
  direction,
  gap,
  justify,
  width,
  wrap,
}) => {
  return (
    <Atom.Flexbox
      align={align}
      direction={direction}
      justify={justify}
      width={width}
      gap={gap}
      wrap={wrap}
    >
      {children}
    </Atom.Flexbox>
  );
};

export default Flexbox;
