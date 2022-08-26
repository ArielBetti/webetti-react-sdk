import { FC } from "react";
import { Paragraph } from "../Paragraph/atoms";

import * as Atom from "./atoms";
import { IWebettiInputProps } from "./types";

const Input: FC<IWebettiInputProps> = ({
  label,
  ...rest
}) => {
  return (
    <Atom.InputContainer>
      {label && (
        <label>
          <Paragraph variant="">{label}</Paragraph>
        </label>
      )}
      <Atom.InputComponent {...rest} />
    </Atom.InputContainer>
  );
};

export default Input;


