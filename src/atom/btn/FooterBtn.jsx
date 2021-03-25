import styled from "styled-components";
import { BaseBtn } from "./BaseBtn";

export const FooterBtn = (props) => {
  const { children } = props;
  return(
    <SFooterBtn onClick={() => alert() }>{children}</SFooterBtn>
  );
};

const SFooterBtn = styled(BaseBtn)`
  background-color:#fff;
  width: 10%;
  text-align: center;
`