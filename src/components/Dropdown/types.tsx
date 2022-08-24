import { ReactNode } from "react";

export interface IWebettiDropdownProps {
  avatar?: string;
  label: string;
  items: IWebettiDropdownItem[];
  avatarRadius?: IWebettiDropdownAvatarRadius,
}

export interface IWebettiDropdownItem {
  icon: ReactNode;
  label: string;
  action(): any;
}

export type IWebettiDropdownAvatarRadius = "circle" | "rounded" | "square";
