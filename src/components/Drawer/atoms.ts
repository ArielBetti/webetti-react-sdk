import styled from "styled-components";
import { IWebettiTheme } from "../../theme";
import { IWebettiDrawerProps } from "./types";

export const DrawerContainer = styled.div<IWebettiDrawerProps>`
  position: absolute;
  top: 0;
  ${(props) => props?.side || "right"}: 0;
  min-height: 100vh;
  background-color: ${({ theme }: { theme: IWebettiTheme }) =>
    theme?.colors?.neutral?.pure};
  min-width: ${({ width }) => width || "50%"};
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
`;
