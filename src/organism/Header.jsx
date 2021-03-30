import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import testimg from "../image/Gourmet.jpeg";

export const Header = () => {
  return (
   <>
    <SHeader>
      <SLogo src={testimg} />
      <SH1>グルメアプリ</SH1>
      <SLink to="/">登録画面へ</SLink>
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

const SLink = styled(Link)`
  margin:14px 0;
  margin-left: 300px;
  padding: 20px;
  background-color:#87ecdb;
  display: block;
  width:20%;
  text-align: center;
  font-size: 26px;
  border-radius: 10px;
`