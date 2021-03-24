import styled from "styled-components";

export const Select = (props) => {
  const { text, category1, category2, category3 } = props;
  return(
    <>
      <STesxt>{ text }</STesxt>
      <SSelect name="category" size="1">
        <option value="categorys1">{category1}</option>
        <option value="categorys2">{category2}</option>
        <option value="categorys3">{category3}</option>
      </SSelect>
    </>
  )
}

const STesxt = styled.p`
  font-size:20px;
  color: #222222;
`

const SSelect = styled.select`
  width:6%;
  height:30px;
  border: 1px solid black;
`