import React from "react";
import { styled } from "styled-components";

function Modal({ setModalControl }) {
  const closeModal = () => {
    setModalControl(false);
  };

  return (
    <Stdiv>
      <h4>
      There are two buttons to close and confirm, and the modal doesn't close when I press on the outer area.
      </h4>
      <StBtnGroup>
        <STBtn color="#D63031" onClick={closeModal}>
          Close
        </STBtn>
        <STBtn color="#55EFC4">Confirm</STBtn>
      </StBtnGroup>
    </Stdiv>
  );
}

export default Modal;

const Stdiv = styled.div`
  border: none;
  border-radius: 8px;

  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 500px;
  height: 300px;

  text-indent: 7px;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;
  z-index: 100;
`;

const StBtnGroup = styled.div`
  position: absolute;
  top: 100%;
  left: 100%;
  transform: translate(-100%, -100%);
  display: flex;
  cursor: pointer;
  gap: 10px;

  padding: 0px 10px 10px 0px;
`;

const STBtn = styled.button`
  width: 120px;
  height: 50px;

  background-color: ${(props) => props.color};
  border-radius: 8px;
  border: none;
  color: white;
`;
