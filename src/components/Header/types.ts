import { ReactNode } from "react";
import { IWebettiTheme } from "../../theme/types";

export interface IWebettiHeaderProps {
  theme?: IWebettiTheme;
  trackHeaderActive?: boolean;
  children: ReactNode;
}

export interface IWebettiNavigationItems {
  hasHamburguerOpen: boolean,
  setBackground: boolean,
  theme?: IWebettiTheme,
}
