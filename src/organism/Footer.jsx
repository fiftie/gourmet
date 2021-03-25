import React from 'react'
import styled from "styled-components";
import { FooterBtn } from '../atom/btn/FooterBtn';

export const Footer = () => {
  return (
   <>
    <SFooter>
      <FooterBtn>全て</FooterBtn>
      <FooterBtn>肉</FooterBtn>
      <FooterBtn>魚</FooterBtn>
      <FooterBtn>麺</FooterBtn>
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