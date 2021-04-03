import React, { useContext } from "react";
import styled from "styled-components";
import { InputContext } from "../../provider/InputProvider";

export const BaseInput = (props) => {
  const { todoText, onChangeTodo} = useContext(InputContext);
  const { placeholder } = props;

  return(
    <>
      <SInput type="text" placeholder={placeholder} value={todoText} onChange={onChangeTodo} />
    </>
  )
}


export const BaseInput2 = (props) => {
  const { tellText, onChangeTell} = useContext(InputContext);
  const { placeholder } = props;


  return(
    <>
      <SInput type="text" placeholder={placeholder} value={tellText} onChange={onChangeTell} />
    </>
  )
}

const SInput = styled.input`
  margin: 0 8px;
  padding:10px;
  width:60%;
  border: 1px solid black;
`
