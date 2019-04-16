import React, { Component } from "react";
import styled from "styled-components";

const Input = styled.input`
  height: 20rem;
  width: 40rem;
  border-radius: 10rem;
  appearance: none;
  background: lightsalmon;
`;

const Wrapper = styled.div`
  height: 100vh;
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

function App() {
  return (
    <Wrapper>
      <Input type="checkbox" />
    </Wrapper>
  );
}

export default App;
