import { FC } from "react";
import { MdPerson } from "react-icons/md";

import * as Atom from "./atoms";
import { IWebettiButtonProps } from "./types";

const Button: FC<IWebettiButtonProps> = ({
  textColor,
  children,
  onClick,
  feedback,
  variant,
  ...rest
}) => {
  if (variant === "secondary") {
    return (
      <Atom.SecondaryButton
        {...rest}
        feedback={feedback}
        onClick={onClick}
        textColor={textColor}
      >
        {children}
      </Atom.SecondaryButton>
    );
  }

  return (
    <Atom.Button
      {...rest}
      feedback={feedback}
      onClick={onClick}
      textColor={textColor}
    >
      {children}
    </Atom.Button>
  );
};

export default Button;
