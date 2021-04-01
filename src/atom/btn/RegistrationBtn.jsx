import React, { useContext } from "react";
import styled from "styled-components";
import { InputContext } from "../../provider/InputProvider";
import { BaseBtn } from "./BaseBtn";

export const RegistrationBtn = (props) => {
  const { children } = props;
  const { onClickAdd } = useContext(InputContext);
  return(
    <SregistrationBtn onClick={() => onClickAdd }>{children}</SregistrationBtn>
  );
};

const SregistrationBtn = styled(BaseBtn)`
  margin-left:200px;
`