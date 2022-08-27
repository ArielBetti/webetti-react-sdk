import { useState, useRef, memo, useEffect } from "react";
import { useClickOutSideComponent } from "../../hooks/useClickOutSideComponent";

// icons
import { MdClose } from "react-icons/md";

// atoms: components
import * as Atom from "./atoms";
import { useWebettiContext } from "../../context";
import Button from "../Button";
import Paragraph from "../Paragraph";

// types
import { IWebettiModalProps } from "./types";

// ::
const Modal = ({
  actionButton,
  children,
  open,
  setOpen,
  textButton,
  title,
}: IWebettiModalProps) => {
  const { theme } = useWebettiContext();

  const modalRef = useRef(null);

  const onCloseModal = () => {
    setOpen(false);
  };

  useClickOutSideComponent(modalRef, onCloseModal);

  if (!open) return <></>;

  return (
    <Atom.ModalBackDrop>
      <Atom.ModalContainer ref={modalRef}>
        <Atom.ModalClose>
          <MdClose
            size="20px"
            color={theme?.colors?.primary}
            onClick={() => onCloseModal()}
          />
        </Atom.ModalClose>
        <Atom.ModalInfo>
          <Atom.ModalHeader>
            <Atom.ModalTitle variant="heading-6">{title}</Atom.ModalTitle>
          </Atom.ModalHeader>
          <Atom.ModalDescription>{children}</Atom.ModalDescription>
        </Atom.ModalInfo>
        {actionButton && (
          <Atom.ModalButtonContainer>
            <Button onClick={() => actionButton()}>
              <Paragraph>{textButton || "Fechar"}</Paragraph>
            </Button>
          </Atom.ModalButtonContainer>
        )}
      </Atom.ModalContainer>
    </Atom.ModalBackDrop>
  );
};

export default memo(Modal);
