import styled from "styled-components";

export const MemoInput = (props) => {
  const { text, placeholder } = props;
  return(
    <>
      <STesxt>{ text }</STesxt>
      <STextArea placeholder={placeholder}></STextArea>
    </>
  );
}

const STesxt = styled.p`
  font-size:20px;
  color: #222222;
`

const STextArea = styled.textarea`
  width:60%;
  height:200px;
  border: 1px solid black;
`