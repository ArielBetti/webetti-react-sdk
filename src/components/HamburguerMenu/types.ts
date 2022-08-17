import { Dispatch, ReactNode, SetStateAction } from "react";

export interface IWebettiHamburguerMenuProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children: ReactNode;
  label: string;
}

export interface IWebettiHamburguerMenuCollapse {
  isOpen: boolean;
}
