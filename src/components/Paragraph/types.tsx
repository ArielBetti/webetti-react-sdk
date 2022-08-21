import { ReactNode } from "react";

export type IWebettiParagraphVariants = "bold" | "italic";

export interface IWebettiParagraphProps {
  variant?: IWebettiParagraphVariants;
  children: ReactNode;
}
