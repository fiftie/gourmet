import styled from "styled-components";
import testimg from "../image/Gourmet.jpeg";

export const Test = () => {
  return(
    <SDiv>
      <SImg src={testimg} alt=""/>
      <SText>画像を追加</SText>
    </SDiv>
  )
}

const SImg = styled.img`
  margin: 0 auto;
  display: block;
  width:68%;
  height:200px;
  object-fit: cover;
`

const SText = styled.p`
  display:block;
  font-size: 20px;
  text-align: center;
`
const SDiv = styled.div`
  margin: 0 auto;
  display:block;
  width:30%;
`