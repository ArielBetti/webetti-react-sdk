import { FC } from "react";

import * as Atom from "./atoms";
import { IWebettiStacker } from "./types";

const Stacker: FC<IWebettiStacker> = ({
  children,
  top,
  all,
  bottom,
  className,
  style,
}) => {
  if (top || all || bottom) {
    return (
      <Atom.Container
        all={all}
        top={top}
        bottom={bottom}
        className={className}
        style={style}
      >
        {children}
      </Atom.Container>
    );
  }

  if (className || style) {
    return (
      <div className={className} style={style}>
        {children}
      </div>
    );
  }

  return <>{children}</>;
};

export default Stacker;
