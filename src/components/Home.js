import React from "react";
import styled from "styled-components";
import Header from "./Header";
import Navigator from "./Navigator";
import Content from "./Content";

const HomeContainer = styled.div`
  height: 100%;
`;

const BodyContainer = styled.div`
  display: flex;
  height: 100%;
`;

const Home = () => {
  return (
    <HomeContainer>
      <Header />
      <BodyContainer>
        <Navigator />
        <Content />
      </BodyContainer>
    </HomeContainer>
  );
};

export default Home;
