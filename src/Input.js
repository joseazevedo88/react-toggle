import React, { useState } from "react";
import styled, { css } from "styled-components";
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

  &:focus {
    border: none;
    /* outline: 2px dotted lightcoral; */
    outline: none;
  }

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
  left: ${props =>
    props.checked
      ? css`calc(${props => props.parentWidth} - ${props => props.height})`
      : 0};
  top: 0;
  border-radius: 50%;
  transform: translate(0);
  transition: all 200ms linear;
  background: ${props => (props.checked ? props.bgAfter : props.background)};
  
  ${display}
  ${space} 
  ${width} 
  ${color} 
  ${height} 
  ${fontSize} 
  ${border} 
  ${fontFamily};
`;

const LabelStyle = styled.p`
  font-family: "Oswald";
  font-size: 5rem;
  text-align: center;
  color: white;
`;

export function Input(props) {
  const [checked, setChecked] = useState(false);

  const onClick = () => {
    setChecked(!checked);
  };

  return (
    <div style={{ position: "relative" }}>
      <InputStyle
        type={props.type}
        bg={props.bg}
        height={props.height}
        width={props.width}
        m={props.m}
        onClick={onClick}
      />
      <Ball
        className={!checked ? "" : props.right}
        height={props.height}
        parentWidth={props.width}
        calc={css`calc(parentWidth - height)`}
        width={props.height}
        m={props.m}
        background={props.ballbg}
        bgAfter={props.ballbgAfter}
        onClick={onClick}
        checked={checked}
      />
      {/* <Label>{checked ? "Checked" : "Unchecked"}</Label> */}
      <Label label={props.label} />
    </div>
  );
}

export function Label(props) {
  const [text, setText] = useState(props.label);

  return <LabelStyle>{text}</LabelStyle>;
}
