import { ReactNode, Dispatch, SetStateAction } from "react";

export interface IWebettiModalProps {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  title: string | ReactNode;
  children: ReactNode;
  textButton?: string;
  actionButton?: (param?: any) => void | any;
}
