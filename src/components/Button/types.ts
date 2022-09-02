import { ButtonHTMLAttributes, ReactNode } from "react";

export interface IWebettiButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  textColor?: "light" | "dark" | undefined;
  variant?: "secondary" | "primary";
  feedback?: TWebettiButtonFeedback;
  onClick: (e?: any) => void | any;
  bold?: boolean;
}

export type TWebettiButtonFeedback = "error" | "success" | "info" | "warning";
