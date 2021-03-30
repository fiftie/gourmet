import { BaseInput } from "../../atom/input/BaseInput";
import styled from "styled-components";


export const NameInpiut = (props) => {
  const { text, placeholder} = props;

  return(
    <>
      <STesxt>{ text }</STesxt>
      <BaseInput placeholder={placeholder} />
    </>
  );
}

const STesxt = styled.p`
  font-size:20px;
  color: #222222;
`