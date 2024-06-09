import React from "react";
import { styled } from "styled-components";

function Modal2({ setModalControl2 }) {
  const closeModal = () => {
    setModalControl2(false);
  };
  const stopPropagation = (e) => {
    e.stopPropagation();
  };

  return (
    <StBackGround onClick={closeModal}>
      <Stdiv onClick={stopPropagation}>
        <div>
          <h4>There is 1 close button. </h4>
          <h4>And when you press the outer area, the modal closes.</h4>
        </div>
        <StBtn onClick={closeModal}>X</StBtn>
      </Stdiv>
    </StBackGround>
  );
}

export default Modal2;
const StBackGround = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
`;

const Stdiv = styled.div`
  border: none;
  border-radius: 8px;
  position: fixed;

  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  width: 300px;
  height: 200px;

  background-color: white;
  box-shadow: rgba(0, 0, 0, 0.5) 0 0 0 9999px;

  flex-direction: row;
  justify-content: center;
  display: flex;
  padding: 5px;
`;

const StBtn = styled.div`
  margin-left: auto;
  border: 1px solid rgb(221, 221, 221);
  background-color: #efefef;
  width: 40px;
  height: 40px;
  border-radius: 100%;
  cursor: pointer;

  flex-direction: row;
  justify-content: center;
  display: flex;
  align-items: center;
`;
