import { useState, useRef } from "react";

// icons
import { MdArrowDropDown } from "react-icons/md";
import { useWebettiContext } from "../../context";

// hooks
import { useClickOutSideComponent } from "../../hooks";
import Paragraph from "../Paragraph";

// atoms
import * as Atom from "./atoms";

// types
import { IWebettiDropdownProps } from "./types";

const Dropdown = ({
  avatar,
  avatarRadius,
  items,
  label,
}: IWebettiDropdownProps) => {
  const { theme } = useWebettiContext();

  const dropdownRef = useRef(null);

  // local: states
  const [toggleOpenDropdown, setToggleOpenDropdown] = useState(false);

  const handleToggleDropdown = () => {
    setToggleOpenDropdown(!toggleOpenDropdown);
  };

  const onClickOutside = () => {
    setToggleOpenDropdown(false);
  };

  useClickOutSideComponent(dropdownRef, onClickOutside);

  return (
    <Atom.DropdownContainer
      ref={dropdownRef}
      isOpen={toggleOpenDropdown}
      onClick={() => handleToggleDropdown()}
    >
      <Atom.DropdownInfo>
        {avatar && (
          <Atom.DropdownAvatar
            radius={avatarRadius}
            effect="blur"
            src={avatar}
            alt=""
          />
        )}
        <Atom.DropdownLabel>
          <Paragraph>{label}</Paragraph>
        </Atom.DropdownLabel>
        <MdArrowDropDown
          className="dropdown-arrow"
          size="20px"
          color={theme?.font?.colors?.contrast}
        />
      </Atom.DropdownInfo>
      <Atom.DropdownCollapse isOpen={toggleOpenDropdown}>
        {items?.map((item) => (
          <Atom.DropdownItemsContainer>
            <Atom.DropdownItem onClick={() => item?.action()}>
              {item?.icon}
              <Paragraph>{item?.label}</Paragraph>
            </Atom.DropdownItem>
          </Atom.DropdownItemsContainer>
        ))}
      </Atom.DropdownCollapse>
    </Atom.DropdownContainer>
  );
};

export default Dropdown;
