import { ReactNode } from "react";
import { IWebettiTheme } from "../../theme/types";

export interface IWebettiHamburguerMenuProps {
  theme?: IWebettiTheme;
  open: boolean;
  setOpen: (param: any) => boolean;
  children: ReactNode;
  label: string;
}

export interface IWebettiHamburguerMenuCollapse {
  isOpen: boolean;
}
