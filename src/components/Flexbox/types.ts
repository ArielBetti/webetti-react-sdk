import { ReactNode } from "react";

export type TJustifyContent =
  | "flex-start"
  | "flex-end"
  | "center"
  | "space-between"
  | "space-around"
  | "space-evenly"
  | "initial"
  | "inherit";

export type TAlignItems =
  | "stretch"
  | "center"
  | "flex-start"
  | "flex-end"
  | "baseline"
  | "initial"
  | "inherit";

export type IFlexWrap =
  | "nowrap"
  | "wrap"
  | "wrap-reverse"
  | "initial"
  | "inherit";

export interface IWebettiFlexboxProps {
  direction: "row" | "column";
  justify: TJustifyContent;
  align: TAlignItems;
  width?: "xsm" | "sm" | "md" | "lg" | "xl";
  gap?: "xxxs" | "xxs" | "xs" | "sm" | "md" | "lg" | "xl" | "xxl" | "xxxl";
  wrap?: IFlexWrap,
  children?: ReactNode;
}
