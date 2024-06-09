import React, { useState } from "react";
import { styled } from "styled-components";

function Select2() {
  const [isOpen2, setIsOpen2] = useState(false);
  const [selectedOption2, setSelectedOption2] = useState("Java");

  const toggleDropdown2 = () => {
    setIsOpen2(!isOpen2);
  };

  const handleOptionClick2 = (option) => {
    setSelectedOption2(option);
    setIsOpen2(false);
  };

  return (
    <SelectedOption2 onClick={toggleDropdown2}>
      {selectedOption2}
      <p>▼</p>
      {isOpen2 && (
        <OptionsList>
          <li onClick={() => handleOptionClick2("Java")}>Java</li>
          <li onClick={() => handleOptionClick2("React")}>React</li>
          <li onClick={() => handleOptionClick2("React Native")}>
          React Native
          </li>
          <li onClick={() => handleOptionClick2("Spring")}>Spring</li>
        </OptionsList>
      )}
    </SelectedOption2>
  );
}

export default Select2;

const SelectedOption2 = styled.div`
  cursor: pointer;
  position: relative;
  left: 20%;
  flex-direction: row;
  justify-content: center;
  display: flex;
  align-items: center;

  padding: 0px 30px 0px 30px;
  margin-left: 10px;
  justify-content: space-between;

  width: 300px;
  height: 40px;
  border: 2px solid #ddd;
  border-radius: 10px;
`;

const OptionsList = styled.ul`
  position: absolute;
  top: 80%;
  left: 0%;
  right: 75%;
  border: 1px solid #ddd;
  border-radius: 10px;
  background-color: white;
  list-style: none;

  width: 300px;
  padding: 0px 30px 0px 30px;

  li {
    padding: 8px;

    cursor: pointer;
    &:hover {
      background-color: #efefef;
    }
  }
`;
