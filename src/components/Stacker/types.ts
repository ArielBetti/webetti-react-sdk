import { CSSProperties, ReactNode } from "react";

export type TWebettiStacker =
  | "xxxs"
  | "xxs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "xxl"
  | "xxxl";

export interface IWebettiStacker {
  children: ReactNode;
  all?: TWebettiStacker;
  top?: TWebettiStacker;
  bottom?: TWebettiStacker;
  className?: string;
  style?: CSSProperties;
}
