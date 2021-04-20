import React from 'react'
import { Link } from 'react-router-dom';
import styled from "styled-components";

export const Footer = () => {
  return (
   <>
    <SFooter>
      <SLink to="/all"><button className="baseBtn">全て</button></SLink>
      <SLink to="/meat"><button className="baseBtn">肉</button></SLink>
      <SLink to="/fish"><button className="baseBtn">魚</button></SLink>
      <SLink to="/noodle"><button className="baseBtn">麺</button></SLink>
    </SFooter>
   </>
  )
}

const SFooter = styled.footer`
  margin: 0 auto;
  padding:20px;
  position: fixed;
  bottom: 0;
  display: flex;
  justify-content: space-around;
  background-color: skyblue;
  width:100%;
  max-width: 1440px;
`

const SLink = styled(Link)`
  display:block;
  width: 10%;
  @media screen and (max-width: 768px){
    font-size: 14px;
  }
  @media screen and (max-width: 375px){
    width:18%;
    font-size: 12px;
  }
`