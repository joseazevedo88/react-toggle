import React, { useState } from "react";
import styled, { ThemeProvider } from "styled-components";
import { theme } from "./theme";
import { Input } from "./Input";
// import { Ball } from "./ball";

const Body = styled.div`
  height: 100vh;
  background: lightblue;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const CheckboxWrapper = styled.div`
  position: relative;
`;

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Body>
        <CheckboxWrapper>
          <Input
            type="checkbox"
            bg={theme.colors.salmon}
            height={theme.sizes.sm}
            width={theme.sizes.md}
            right="right-10"
            m={theme.sizes.sm}
            ballbg={theme.colors.light}
          />
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Input
            type="checkbox"
            bg={theme.colors.coral}
            height={theme.sizes.sm}
            width={theme.sizes.lg}
            right="right-15"
            m={theme.sizes.sm}
            ballbg={theme.colors.light}
          />
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Input
            type="checkbox"
            bg={theme.colors.seagreen}
            height={theme.sizes.md}
            width={theme.sizes.xlg}
            right="right-10"
            m={theme.sizes.sm}
            ballbg={theme.colors.light}
          />
        </CheckboxWrapper>
      </Body>
    </ThemeProvider>
  );
}

export default App;
