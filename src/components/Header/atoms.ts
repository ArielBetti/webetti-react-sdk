import styled from "styled-components";
import { IWebettiTheme } from "../../theme/types";
import { IWebettiNavigationItems } from "./types";

export const NavigationContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  left: 0;
  top: 0;
  align-items: center;
  width: 100%;
  padding-top: 35px;
  padding-bottom: 10px;
  margin-bottom: 35px;
  z-index: 2;
  position: relative;
`;

export const NavigationExtends = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  left: 0;
`;

export const NavigationItems = styled.div`
  display: -webkit-box;
  display: -webkit-flex;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: justify;
  -webkit-justify-content: space-between;
  -ms-flex-pack: justify;
  justify-content: space-between;
  width: 100%;
  position: fixed;
  left: 0;
  top: 0;
  padding: 10px 0px;
  background-color: ${({
    setBackground,
    hasHamburguerOpen,
    theme,
  }: IWebettiNavigationItems) =>
    setBackground || hasHamburguerOpen
      ? theme?.colors?.neutral.pure
      : "transparent"};
  box-shadow: ${({
    setBackground,
    hasHamburguerOpen,
  }: IWebettiNavigationItems) =>
    setBackground || hasHamburguerOpen
      ? "0px 0px 10px 0px rgba(0, 0, 0, 0.5)"
      : "none"};
  transition: background-color
    ${({ theme }: { theme: IWebettiTheme }) => theme?.transitions.time};
`;
