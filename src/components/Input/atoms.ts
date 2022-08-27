import styled from "styled-components";
import { IWebettiTheme } from "../../theme";

export const InputContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: flex-start;
  gap: 10px;
  width: 100%;
`;

export const InputComponent = styled.input<HTMLInputElement | any>`
  background-color: ${({ theme }: { theme: IWebettiTheme }) =>
    theme?.colors?.neutral[1]};
  border: none;
  color: ${({ theme }: { theme: IWebettiTheme }) => theme?.font?.colors?.pure};
  font-size: 16px;
  padding: 10px;
  width: 100%;
  border-radius: 6px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 0.0625em 0.0625em, rgba(0, 0, 0, 0.25) 0px 0.125em 0.5em, rgba(255, 255, 255, 0.1) 0px 0px 0px 1px inset;

  ::placeholder {
    color: ${({ theme }: { theme: IWebettiTheme }) => theme?.font?.colors?.[1]};
  }

  :disabled {
    background-color: ${({ theme }: { theme: IWebettiTheme }) =>
      theme?.colors?.neutral[3]};
    cursor: default;
  }
`;
