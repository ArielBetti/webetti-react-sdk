import styled from "styled-components";
import { IWebettiTheme } from "../../theme";
import { IWebettiParagraphVariants } from "./types";

const formatVariantFontWeight = (variant: IWebettiParagraphVariants) => {
  switch (variant) {
    case "bold":
      return "bold";
    case "italic":
      return "italic";
    default:
      return;
  }
};
export const Paragraph = styled.p`
  font-family: sans-serif;
  font-size: 16px;
  font-weight: ${({ variant }: { variant: IWebettiParagraphVariants | any }) =>
    variant ? formatVariantFontWeight(variant) : "default"};
  color: ${({ theme }: { theme: IWebettiTheme }) => theme?.font?.colors?.pure};
`;
