import styled from "styled-components";

export const BaseInput = (props) => {
  const { placeholder = "" } = props;
  return(
    <SInput type="text" placeholder={placeholder}/>
  )
}

const SInput = styled.input`
  margin: 0 8px;
  padding:10px;
  width:60%;
  border: 1px solid black;
`