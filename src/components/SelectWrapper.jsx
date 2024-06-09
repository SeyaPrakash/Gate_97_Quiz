import React from "react";
import { styled } from "styled-components";
import Select from "./select/Select";
import Select2 from "./select/Select2";

function SelectWrapper() {
  return (
    <StSelectDiv>
      <h1>Select</h1>
      <SelectContainer>
        <Select />
        <Select2 />
      </SelectContainer>
    </StSelectDiv>
  );
}

export default SelectWrapper;

const StSelectDiv = styled.div`
  border: 3px solid rgb(221, 221, 221);
  height: 200px;
  overflow: hidden;
  margin-top: 50px;
  min-width: 2000px;
`;

const SelectContainer = styled.div`
  display: flex;
`;
