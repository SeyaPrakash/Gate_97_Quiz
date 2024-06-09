import React, { useState } from "react";
import Input from "./input/Input";
import { styled } from "styled-components";

function InputWrapper() {
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);

  const saveButton = () => {
    if (!name.length || !price.length) {
      alert("Please enter both your name and price!!");
      return;
    }
    alert(`name: ${name} , price: ${price}`);

    setName("");
    setPrice(0);
  };
  return (
    <>
      <h1>Input</h1>
      <StInputDiv>
        <Input title1="Name" title2={name} setTitle={setName}></Input>
        <Input title1="Price" title2={price} setTitle={setPrice}></Input>
        <StBtn onClick={saveButton}>Save</StBtn>
      </StInputDiv>
    </>
  );
}

export default InputWrapper;

// styled-components ------------------------------------------------------

const StInputDiv = styled.div`
  display: flex;
  flex-direction: row;
  margin-left: 10px;
  gap: 20px;
`;

// button CSS
const StBtn = styled.button`
  border: none;
  cursor: pointer;
  border-radius: 8px;
  height: 40px;
  width: 100px;

  background-color: #55efc4;
`;
