import styled from "styled-components";
import { IWebettiTheme } from "../../theme";
import { IWebettiHamburguerMenuCollapse } from "./types";

export const HamburguerMenuToggle = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  height: 40px;
  border-radius: 5px;
  background-color: ${({ theme }: { theme: IWebettiTheme }) =>
    theme?.colors?.primary};
  border: 1px solid
    ${({ theme }: { theme: IWebettiTheme }) => theme?.colors?.primary};
  cursor: pointer;
`;

export const HamburguerMenuCollapse = styled.div`
  transition: ease 0.25s all;
  visibility: ${({ isOpen }: IWebettiHamburguerMenuCollapse) =>
    isOpen ? "visible" : "hidden"};
  opacity: ${({ isOpen }: IWebettiHamburguerMenuCollapse) => (isOpen ? 1 : 0)};
  position: absolute;
  top: 100%;
  right: 0;
  height: 100%;
  background-color: ${({ theme }: { theme: IWebettiTheme }) =>
    theme?.colors?.neutral?.pure};
  min-width: ${({ isOpen }: IWebettiHamburguerMenuCollapse) =>
    isOpen ? "50%" : "0%"};
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  border-top: 2px solid
    ${({ theme }: { theme: IWebettiTheme }) => theme?.colors?.primary};
`;
