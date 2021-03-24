import React, { useState } from "react";
import { BaseInput } from "../../atom/input/BaseInput";
import styled from "styled-components";


export const NameInpiut = (props) => {
  const { text, placeholder } = props;

  const [todoText, setTodoText] = useState("");
  const onChangeTodo =(e) => setTodoText(e.target.value);

  console.log(todoText);

  return(
    <>
      <STesxt>{ text }</STesxt>
      <BaseInput placeholder={placeholder} onChange={onChangeTodo} value={todoText} />
    </>
  );
}

const STesxt = styled.p`
  font-size:20px;
  color: #222222;
`