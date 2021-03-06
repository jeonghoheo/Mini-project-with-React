import React from "react";
import styled from "styled-components";
import Profile from "./Profile";
import DropDown from "./DropDown";
import Store from "./store";

const NavContainer = styled.div`
  opacity: ${props => (props.clicked ? 1 : 0)};
  transition: all 0.5s linear;
  visibility: ${props => (props.clicked ? "visible" : "hidden")};
  display: flex;
  flex-direction: column;
  padding: 10px;
  height: 100vh;
  min-width: 250px;
  background-color: #2f3640;
  color: #ecf0f1;
  position: relative;
`;

const CloseBtn = styled.div`
  width: 60%;
  position: absolute;
  align-self: center;
  bottom: 10%;
  background-color: #487eb0;
  border-radius: 5px;
  padding: 10px;
  color: #dcdde1;
  display: flex;
  justify-content: center;
  cursor: pointer;
`;

const Navigator = () => {
  return (
    <Store.Consumer>
      {store => {
        const { clicked, onClicked } = store;
        return (
          <NavContainer clicked={clicked}>
            <Profile />
            <DropDown />
            <CloseBtn onClick={onClicked}>메뉴 닫기</CloseBtn>
          </NavContainer>
        );
      }}
    </Store.Consumer>
  );
};

export default Navigator;
