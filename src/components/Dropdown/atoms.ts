import { LazyLoadImage } from "react-lazy-load-image-component";
import styled from "styled-components";
import { IWebettiTheme } from "../../theme";

export const DropdownAnchor = styled.div`
  position: relative;
`;

export const DropdownContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  min-width: 200px;
  border-left: 2px solid
    ${({ theme }: { theme: IWebettiTheme }) => theme?.colors?.primary};
  transition: linear 0.25s background-color;
  padding: 5px;
  flex-wrap: nowrap;
  cursor: pointer;
  background-color: ${({
    isOpen,
    theme,
  }: {
    isOpen: boolean;
    theme: IWebettiTheme;
  }) => (isOpen ? theme?.colors?.neutral[2] : "transparent")};
  :hover {
    background-color: ${(props) => props?.theme?.colors?.neutral[2]};
  }

  .dropdown-arrow {
    transition: 0.45s transform ease;
    transform: ${({ isOpen }: { isOpen: boolean }) =>
      isOpen ? "rotate(180deg)" : "none"};
  }
`;

export const DropdownLabel = styled.p`
  max-width: 120px;
  overflow: hidden;
  display: inline-block;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

export const DropdownCollapse = styled.div`
  position: absolute;
  visibility: ${({ isOpen }: { isOpen: boolean }) =>
    isOpen ? "visible" : "hidden"};
  transition: 0.45s all ease;
  opacity: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? 1 : 0)};
  transition-property: background-color, opacity, height;
  top: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "100%" : "0px")};
  left: 0px;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  width: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "100%" : "0%")};
  margin-right: 10px;
  border: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "1px" : "0px")} solid
    ${({ theme }: { theme: IWebettiTheme }) => theme?.colors?.neutral[2]};
  border-left: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "2px" : "0px")}
    solid ${({ theme }: { theme: IWebettiTheme }) => theme?.colors?.primary};
  border-top: none;
  overflow: hidden;
  background-color: ${({ theme }: { theme: IWebettiTheme }) =>
    theme?.colors?.neutral[1]};
  cursor: default;
  height: ${({ isOpen }: { isOpen: boolean }) => (isOpen ? "auto" : "0px")}; ;
`;

export const DropdownItem = styled.div`
  width: 100%;
  transition: linear 0.25s background-color;
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

export const DropdownAvatar = styled(LazyLoadImage)`
  width: 45px;
  height: 45px;
  border-radius: 100%;
`;
