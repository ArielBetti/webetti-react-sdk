import { useState, useRef } from "react";

// icons
import { MdArrowDropDown } from "react-icons/md";
import { useWebettiContext } from "../../context";

// hooks
import { useClickOutSideComponent } from "../../hooks";

// atoms
import * as Atom from "./atoms";

// types
import { IWebettiDropdownProps } from "./types";

const Dropdown = ({ label, items, avatar }: IWebettiDropdownProps) => {
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
    <Atom.DropdownAnchor>
      <Atom.DropdownContainer
        ref={dropdownRef}
        isOpen={toggleOpenDropdown}
        onClick={() => handleToggleDropdown()}
      >
        {avatar && <Atom.DropdownAvatar effect="blur" src={avatar} alt="" />}
        <Atom.DropdownLabel>{label}</Atom.DropdownLabel>
        <MdArrowDropDown
          className="dropdown-arrow"
          size="20px"
          color={theme?.font?.colors?.contrast}
        />
        <Atom.DropdownCollapse
          className="dropdown-open"
          isOpen={toggleOpenDropdown}
        >
          {items?.map((item) => (
            <Atom.DropdownItem onClick={() => item?.action()}>
              {item?.icon}
              <p>{item?.label}</p>
            </Atom.DropdownItem>
          ))}
        </Atom.DropdownCollapse>
      </Atom.DropdownContainer>
    </Atom.DropdownAnchor>
  );
};

export default Dropdown;
