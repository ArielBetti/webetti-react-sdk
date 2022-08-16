import { ReactNode } from "react";
import { ITheme } from "../../theme";

export interface IWebettiHeaderProps {
  theme: ITheme;
  children: ReactNode;
}

export interface IWebettiNavigationItems {
  hasHamburguerOpen: boolean,
  setBackground: boolean,
  theme: ITheme,
}
