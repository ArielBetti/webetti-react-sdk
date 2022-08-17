import { ReactNode } from "react";

export interface IWebettiDropdownProps {
  avatar?: string;
  label: string;
  items: IWebettiDropdownItem[];
}

export interface IWebettiDropdownItem {
  icon: ReactNode;
  label: string;
  action(): any;
}
