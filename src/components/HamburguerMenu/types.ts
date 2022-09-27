import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IWebettiHamburguerMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  side?: "left" | "right";
  width?: string;
}

export interface IWebettiHamburguerMenuCollapse {
  isOpen: boolean;
  side?: "left" | "right";
  width?: string;
}
