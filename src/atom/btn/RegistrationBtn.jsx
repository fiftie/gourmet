import styled from "styled-components";
import { BaseBtn } from "./BaseBtn";

export const RegistrationBtn = (props) => {
  const { children } = props;
  return(
    <SregistrationBtn onClick={() => alert() }>{children}</SregistrationBtn>
  );
};

const SregistrationBtn = styled(BaseBtn)`
  margin-left:200px;
`