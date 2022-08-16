import styled from "styled-components";
import { IWebettiTheme } from "../../theme";

export const Container = styled.div`
  position: relative;
  top: 0;
  left: 0;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 0 auto;
  box-sizing: border-box;
  max-width: 1320px;
  padding: 0px;
  @media (max-width: ${({ theme }: { theme: IWebettiTheme }) =>
      theme?.breakpoints.xl}) {
    max-width: 1140px;
    padding: 0px 25px;
  }
  @media (max-width: ${({ theme }: { theme: IWebettiTheme }) =>
      theme?.breakpoints.lg}) {
    max-width: 960px;
  }
  @media (max-width: ${({ theme }: { theme: IWebettiTheme }) =>
      theme?.breakpoints.md}) {
    max-width: 720px;
    padding: 0px 15px;
  }
  @media (max-width: ${({ theme }: { theme: IWebettiTheme }) =>
      theme?.breakpoints.sm}) {
    max-width: 100%;
  }
`;
