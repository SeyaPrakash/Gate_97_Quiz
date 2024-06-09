import React, { useState } from "react";
import Modal from "./modal/Modal";
import Modal2 from "./modal/Modal2";
import { styled } from "styled-components";

function ModalWrapper() {
  const [modalControl, setModalControl] = useState(false);
  const [modalControl2, setModalControl2] = useState(false);

  const openModal = () => {
    setModalControl(true);
  };
  const openModal2 = () => {
    setModalControl2(true);
  };

  return (
    <>
      <div>
        <h1>Modal</h1>
        <StBtnDiv>
          <StBtn
            color="#55EFC4"
            backColor="#55EFC4"
            width="100px"
            height="40px"
            onClick={openModal}
          >
            Open Modal
          </StBtn>
          <StBtn
            color="#D63031"
            backColor="white"
            width="200px"
            height="50px"
            onClick={openModal2}
          >
            Open Modal
          </StBtn>
        </StBtnDiv>
      </div>
      {modalControl && <Modal setModalControl={setModalControl} />}
      {modalControl2 && <Modal2 setModalControl2={setModalControl2} />}
    </>
  );
}

export default ModalWrapper;

const StBtnDiv = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 10px;
`;

const StBtn = styled.button`
  border: 3px solid ${(props) => props.color};
  border-radius: 8px;

  background-color: ${(props) => props.backColor};
  height: ${(props) => props.height};
  width: ${(props) => props.width};

  cursor: pointer;
  &:active {
    box-shadow: 1px 1px 20px #ddd;
    filter: brightness(0.9);
  }
`;
