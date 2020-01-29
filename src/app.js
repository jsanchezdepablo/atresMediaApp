import React from "react";
import DogSelector from "./components/DogSelector";
import styled from "styled-components";

const app = () => (
  <StyledApp className="App">
    <DogSelector />
  </StyledApp>
);

const StyledApp = styled.div`
  && {
    padding: 50px;
  }
`;

export default app;
