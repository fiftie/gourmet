import { BaseInput } from "../../atom/input/BaseInput";
import { BaseInput2 } from "../../atom/input/BaseInput";
import styled from "styled-components";


export const NameInpiut = (props) => {
  const { text, placeholder } = props;

  return(
    <>
      <STesxt>{ text }</STesxt>
      <BaseInput placeholder={placeholder} />
    </>
  );
}

export const NameInpiut2 = (props) => {
  const { text, placeholder } = props;

  return(
    <>
      <STesxt>{ text }</STesxt>
      <BaseInput2 placeholder={placeholder} />
    </>
  );
}



const STesxt = styled.p`
  font-size:20px;
  color: #222222;
`