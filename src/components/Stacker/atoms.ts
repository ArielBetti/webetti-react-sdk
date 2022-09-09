import styled from "styled-components";
import { IWebettiTheme } from "../../theme";
import { TWebettiStacker } from "./types";

const handleContainerStyles = (
  theme: IWebettiTheme,
  all?: TWebettiStacker,
  top?: TWebettiStacker,
  bottom?: TWebettiStacker
) => {
  const styles = {
    top: "",
    bottom: "",
  };

  if (all) {
    styles.top = theme.spacing?.[all] || "";
    styles.bottom = theme.spacing?.[all] || "";
  }
  if (top) {
    styles.top = theme.spacing?.[top] || "";
  }
  if (bottom) {
    styles.bottom = theme.spacing?.[bottom] || "";
  }

  return `${styles.top !== "" ? `margin-top: ${styles.top};` : ""} ${
    styles.bottom !== "" ? `margin-bottom: ${styles.bottom};` : ""
  }`;
};

export const Container = styled.div<{
  all?: TWebettiStacker;
  top?: TWebettiStacker;
  bottom?: TWebettiStacker;
}>`
  ${({ theme }: { theme: IWebettiTheme }) =>
    (props) =>
      `${handleContainerStyles(theme, props?.all, props?.top, props?.bottom)}`}
`;
