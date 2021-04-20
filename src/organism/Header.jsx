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
      <SLink className="baseBtn" to="/gourmet">登録画面へ</SLink>
    </SHeader>
   </>
  )
}

const SLogo = styled.img`
  display: block;
  width:6%;
  height:auto;
  object-fit: cover;
  @media screen and (max-width: 768px){
    width:14%;
  }
`

const SHeader = styled.header`
  margin: 20px auto;
  display: flex;
  justify-content:space-around;
  align-items: center;
  width: 80%;
  border-bottom: 1px solid black;
`

const SH1 = styled.h1`
  font-size: 30px;
  font-weight:bold;
  @media screen and (max-width: 1024px){
    font-size: 24px;
  }
  @media screen and (max-width: 768px){
    font-size: 20px;
  }
`

const SLink = styled(Link)`
  margin:14px 0;
  padding: 20px;
  background-color:#87ecdb;
  box-shadow: 0 4px 0 #71b3a8;
  display: block;
  width:20%;
  text-align: center;
  font-size: 26px;
  border-radius: 10px;
  @media screen and (max-width: 1024px){
    padding: 14px;
    font-size: 18px;
  }
  @media screen and (max-width: 768px){
    padding: 10px;
    font-size: 12px;
    width:30%;
  }
  @media screen and (max-width: 320px){
    font-size: 10px;
  }
`