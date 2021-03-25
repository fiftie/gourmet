import React from 'react'
import styled from 'styled-components';
import testimg from "../image/Gourmet.jpeg";

export const Header = () => {
  return (
   <>
    <SHeader>
      <SLogo src={testimg} />
      <SH1>グルメアプリ</SH1>
    </SHeader>
   </>
  )
}

const SLogo = styled.img`
  display: block;
  width:6%;
  height:auto;
  object-fit: cover;
`

const SHeader = styled.header`
  margin: 20px auto;
  display: flex;
  align-items: center;
  width: 80%;
  border-bottom: 1px solid black;
`

const SH1 = styled.h1`
  margin-left: 120px;
  font-size: 30px;
`
