import React, { useState } from "react";
import styled from "styled-components";
import {
  display,
  space,
  color,
  width,
  height,
  fontSize,
  border,
  fontFamily
} from "styled-system";

import "./index.css";

const InputStyle = styled.input`
  height: 20rem;
  width: 40rem;
  border-radius: 10rem;
  appearance: none; 
  margin: 0;
  position: relative;
  &:focus {
    border: none;
    outline: none;
  }

  /* &::before {
    content: "";
    height: 20rem;
    width: 20rem;
    background: white;
    position: absolute;
    border-radius: 50%;
    transform: translate(0);
    transition: all 200ms linear;
  }

  &:checked {
    &::before {
      content: "";
      height: 20rem;
      width: 20rem;
      background: lightsteelblue;
      position: absolute;
      transform: translate(20rem);
      transition: all 200ms linear;
      border-radius: 50%;
    }
  } */
  ${display}
  ${space}
  ${width}
  ${color}
  ${height}
  ${fontSize}
  ${border}
  ${fontFamily}
`;

const Ball = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  border-radius: 50%;
  transform: translate(0);
  transition: all 200ms linear;
  ${display}
  ${space}
  ${width}
  ${color}
  ${height}
  ${fontSize}
  ${border}
  ${fontFamily}
`;

const Label = styled.p`
  font-family: "Oswald";
  font-size: 5rem;
  text-align: center;
  color: white;
`;

export function Input(props) {
  const [checked, setChecked] = useState("Unchecked");
  const [left, setLeft] = useState(true);

  const onClick = () => {
    if (checked === "Checked") setChecked("Unchecked");
    else setChecked("Checked");
    setLeft(!left);
  };

  // const right10 = {
  //   background: "lightsteelblue !important",
  //   transform: "translate(10rem) !important",
  //   transition: "all 200ms linear !important"
  // };

  return (
    <div>
      <InputStyle
        type={props.type}
        bg={props.bg}
        height={props.height}
        width={props.width}
        m={props.m}
        onClick={onClick}
      />
      <Ball
        className={left ? "" : props.right}
        height={props.height}
        width={props.height}
        m={props.m}
        bg={props.ballbg}
        onClick={onClick}
        // style={left ? {} : right10}
      />
      <Label>{checked}</Label>
    </div>
  );
}
