import { ReactNode } from "react";
import { IWebettiTheme } from "../../theme/types";

export interface IWebettiHeaderProps {
  theme?: IWebettiTheme;
  children: ReactNode;
}

export interface IWebettiNavigationItems {
  hasHamburguerOpen: boolean,
  setBackground: boolean,
  theme: IWebettiTheme,
}
