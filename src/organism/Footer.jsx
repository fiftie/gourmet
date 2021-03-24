import React from 'react'
import styled from "styled-components";

export const Footer = () => {
  return (
   <>
    <SFooter>
      <SLink href="">全て</SLink>
      <SLink href="">肉</SLink>
      <SLink href="">魚</SLink>
      <SLink href="">麺</SLink>
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

const SLink = styled.a`
  padding: 16px;
  width:10%;
  background-color: #fff;
  text-align: center;
  border-radius:10px;
`