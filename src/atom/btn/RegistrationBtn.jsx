import React, { useContext } from "react";
import styled from "styled-components";
import { InputContext } from "../../provider/InputProvider";
import { BaseBtn } from "./BaseBtn";

export const RegistrationBtn = (props) => {
  const { children } = props;
  const { onClickAllText } = useContext(InputContext);
  
  return(
    <SregistrationBtn onClick={() => onClickAllText() }>{children}</SregistrationBtn>
  );
};

const SregistrationBtn = styled(BaseBtn)`
  margin-left:200px;
`