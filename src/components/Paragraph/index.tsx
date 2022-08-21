// atoms
import * as Atom from "./atoms";

// types
import { IWebettiParagraphProps } from "./types";

const Paragraph = ({ variant, children }: IWebettiParagraphProps) => {
  return <Atom.Paragraph variant={variant}>{children}</Atom.Paragraph>;
};

export default Paragraph;
