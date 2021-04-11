import React, { useContext , useState} from "react";
import styled from "styled-components";
import { InputContext } from "../../provider/InputProvider";

export const BaseInput = (props) => {
  const { todoText, onChangeTodo} = useContext(InputContext);
  const { placeholder } = props;

  
  return(
    <>
      <SInput type="text" placeholder={placeholder} name="todoText" onChange={onChangeTodo} />
    </>
  )
}


export const BaseInput2 = (props) => {
  const { tellText, onChangeTodo, answer, setAnswer} = useContext(InputContext);
  const { placeholder } = props;
  
  console.log(answer)

  return(
    <>
      <SInput type="text" placeholder={placeholder} name="tellText" onChange={(e) => {setAnswer({ ...answer, tel: e.target.value })}} />
      <SInput type="text" placeholder={placeholder} name="tellText" onChange={(e) => {setAnswer({ ...answer, name: e.target.value })}} />
    </>
  )
}

const SInput = styled.input`
  margin: 0 8px;
  padding:10px;
  width:60%;
  border: 1px solid black;
`
