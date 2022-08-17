import styled from "styled-components";
import { IWebettiTheme } from "../../theme";

export const HamburguerMenuItem = styled.div`
  min-height: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 15px 10px;
  cursor: pointer;
  gap: 10px;

  :hover {
    background-color: ${({ theme }: { theme: IWebettiTheme }) =>
      theme?.colors?.neutral[3]};
  }
`;
