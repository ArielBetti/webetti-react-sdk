// atoms
import * as Atom from "./atoms";

// types
import { IWebettiHeadingProps } from "./types";

const Heading = ({ variant, children }: IWebettiHeadingProps) => {
  return <Atom.Heading variant={variant}>{children}</Atom.Heading>;
};

export default Heading;
