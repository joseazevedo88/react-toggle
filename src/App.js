import React from "react";
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
            render={checked => (!checked ? "Unchecked" : "Checked")}
            type="checkbox"
            bg={theme.colors.salmon}
            height={theme.sizes.sm}
            width={theme.sizes.md}
            m={theme.sizes.sm}
            ballbg={theme.colors.light}
            ballbgAfter={theme.colors.yellow}
            label="Cool"
          />
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Input
            render={checked => (!checked ? "Beep" : "Boop")}
            type="checkbox"
            bg={theme.colors.coral}
            height={theme.sizes.sm}
            width={theme.sizes.lg}
            m={theme.sizes.sm}
            ballbg={theme.colors.seagreen}
            ballbgAfter={theme.colors.salmon}
            label="Checked"
          />
        </CheckboxWrapper>
        <CheckboxWrapper>
          <Input
            render={checked => (!checked ? "Unchecked" : "Checked")}
            type="checkbox"
            bg={theme.colors.seagreen}
            height={theme.sizes.md}
            width={theme.sizes.xlg}
            m={theme.sizes.sm}
            ballbg={theme.colors.yellow}
            ballbgAfter={theme.colors.light}
            label="blabal"
          />
        </CheckboxWrapper>
      </Body>
    </ThemeProvider>
  );
}

export default App;
