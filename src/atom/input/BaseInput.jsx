import React, { useState } from "react";
import styled from "styled-components";

export const BaseInput = (props) => {
  const { placeholder = "" } = props;

  const [todoText, setTodoText] = useState("");
  const onChangeTodo =(e) => setTodoText(e.target.value);
  console.log(todoText);

  return(
    <>
      <SInput type="text" placeholder={placeholder} value={todoText} onChange={onChangeTodo} />
    </>
  )
}

const SInput = styled.input`
  margin: 0 8px;
  padding:10px;
  width:60%;
  border: 1px solid black;
`
