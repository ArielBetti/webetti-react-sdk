import { Dispatch, ReactNode, SetStateAction } from "react";
import { IWebettiTheme } from "../../theme/types";

export interface IWebettiHamburguerMenuProps {
  theme?: IWebettiTheme;
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  label: string;
}

export interface IWebettiHamburguerMenuCollapse {
  isOpen: boolean;
}
