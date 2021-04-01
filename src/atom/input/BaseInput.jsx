import React, { useContext } from "react";
import styled from "styled-components";
import { InputContext } from "../../provider/InputProvider";

export const BaseInput = (props) => {
  const { todoText, onChangeTodo} = useContext(InputContext);
  const { placeholder } = props;

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
