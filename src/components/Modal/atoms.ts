import styled from "styled-components";
import Heading from "../Heading";

export const ModalBackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  background-color: ${(props) => `${props.theme.colors?.neutral?.pure}B3`};
  position: fixed;
  left: 0;
  top: 0;
  z-index: 3;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  background-color: ${(props) => `${props.theme.colors?.neutral.pure}`};
  box-shadow: 0px 0px 3px 0px rgba(0, 0, 0, 0.3);
  padding: 25px 10px;
  height: 100%;
  max-height: 300px;
  min-width: 400px;
  max-width: 600px;
  border-radius: 4px;
  position: relative;

  @media (max-width: ${(props) => props?.theme?.breakpoints?.sm}) {
    min-width: 235px;
    max-width: 100%;
    max-height: 80%;
  }
`;

export const ModalHeader = styled.div`
  margin-bottom: 15px;
`;

export const ModalTitle = styled(Heading)`
  font-weight: bold;
  gap: 10px;
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: center;
`;

export const ModalDescription = styled.div`
  margin-bottom: 15px;
  line-height: 1.3em;
`;

export const ModalClose = styled.div`
  position: absolute;
  top: 8px;
  right: 8px;
  cursor: pointer;
`;

export const ModalInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-direction: column;
  height: 100%;
  width: 100%;
  overflow: auto;
  border-bottom: 2px solid ${(props) => props.theme.colors?.primary};
`;

export const ModalButtonContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 10px 0px;
`;
