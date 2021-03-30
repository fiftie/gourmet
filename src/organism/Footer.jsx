import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";
import { FooterBtn } from '../atom/btn/FooterBtn';

export const Footer = () => {
  return (
   <>
    <SFooter>
      <SLink to="/all"><FooterBtn>全て</FooterBtn></SLink>
      <SLink to="/all"><FooterBtn>肉</FooterBtn></SLink>
      <SLink to="/all"><FooterBtn>魚</FooterBtn></SLink>
      <SLink to="/all"><FooterBtn>麺</FooterBtn></SLink>
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

const SLink = styled(Link)`
  display:block;
  width: 10%;
`