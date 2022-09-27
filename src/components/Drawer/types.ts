import { ReactNode } from "react";

export interface IWebettiDrawerProps {
  side?: "left" | "right";
  width?: string;
  children: ReactNode;
}
