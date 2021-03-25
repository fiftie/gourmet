import React from 'react'
import styled from "styled-components";
import { Footer } from "../organism/Footer";
import { Header } from '../organism/Header';
import { Top } from '../templates/top/Top';


export const TopPage = () => {
  return (
    <>
      <Header />
      <STtile>登録画面</STtile>
      <Top />
      <Footer />
    </>
  )
}

const STtile = styled.h2`
  margin-top:60px;
  font-size: 36px;
  text-align:center;
`