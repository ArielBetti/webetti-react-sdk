import styled from "styled-components";
import { IWebettiTheme } from "../../theme";
import { IWebettiHeadingVariants } from "./types";

const formatVariantFontSize = (variant: IWebettiHeadingVariants) => {
  switch (variant) {
    case "heading-1":
      return "80px";
    case "heading-2":
      return "64px";
    case "heading-3":
      return "48px";
    case "heading-4":
      return "32px";
    case "heading-5":
      return "24px";
    case "heading-6":
      return "20px";
    default:
      return "80px";
  }
};

export const Heading = styled.h1`
  font-family: sans-serif;
  font-size: ${({ variant }: { variant: IWebettiHeadingVariants }) =>
    formatVariantFontSize(variant)};
  color: ${({ theme }: { theme: IWebettiTheme }) => theme?.font?.colors?.pure};
`;
