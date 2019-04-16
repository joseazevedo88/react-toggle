import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
//import theme from './theme'

const Input = styled.input`
  height: 20rem;
  width: 40rem;
  border-radius: 10rem;
  appearance: none;
  background: lightsalmon;
  position: relative;
  margin: 0;

  &:focus {
    border: none;
    outline: none;
  }

  &::before {
    content: "";
    height: 20rem;
    width: 20rem;
    background: white;
    position: absolute;
    border-radius: 50%;
  }

  &:checked {
    &::before {
      content: "";
      height: 20rem;
      width: 20rem;
      background: white;
      position: absolute;
      right: 0;
      transition: right 500ms linear;
      border-radius: 50%;
    }
  }
`;

const Body = styled.div`
  height: 100vh;
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const InputWrapper = styled.div`
  position: relative;
`;

const Label = styled.p`
  font-family: "Oswald";
  font-size: 10rem;
  margin-left: 4rem;
  color: white;
`;

function App() {
  const [checked, setChecked] = useState("Unchecked");

  return (
    // <ThemeProvider theme={theme}>
    <Body>
      <InputWrapper>
        <Input
          type="checkbox"
          onClick={() => {
            if (checked === "Checked") setChecked("Unchecked");
            else setChecked("Checked");
          }}
        />
        {/* {checked && <Checked />}
        {!checked && <Unchecked />} */}
      </InputWrapper>
      <Label>{checked}</Label>
    </Body>
    // </ThemeProvider>
  );
}

export default App;
