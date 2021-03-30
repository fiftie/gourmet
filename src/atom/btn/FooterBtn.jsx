import styled from "styled-components";
import { BaseBtn } from "./BaseBtn";

export const FooterBtn = (props) => {
  const { children } = props;
  return(
    <SFooterBtn>{children}</SFooterBtn>
  );
};

const SFooterBtn = styled(BaseBtn)`
  background-color:#fff;
  width: 100%;
  text-align: center;
`