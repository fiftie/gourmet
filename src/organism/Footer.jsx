import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Footer = () => {
  return (
   <>
    <SFooter>
      <SLink to="/all"><SBtn>全て</SBtn></SLink>
      <SLink to="/all"><SBtn>肉</SBtn></SLink>
      <SLink to="/all"><SBtn>魚</SBtn></SLink>
      <SLink to="/all"><SBtn>麺</SBtn></SLink>
    </SFooter>
   </>
  )
}

const SFooter = styled.footer`
  padding:20px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: skyblue;
  width:100%;
`

const SBtn = styled.button`
  padding: 16px 0;
  display: block;
  background-color:#fff;
  box-shadow: 0 4px 0 #d8d8d8;
  border-radius: 10px;
  width: 80%;
  text-align: center;
`

const SLink = styled(Link)`
  display:block;
  width: 10%;
`