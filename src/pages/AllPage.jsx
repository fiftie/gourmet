import React from 'react'
import { Footer } from '../organism/Footer'
import { Header } from '../organism/Header'
import { All } from '../templates/all/All'
import styled from "styled-components";
import { AllProvider } from '../providers/AllProvider';


export const AllPage = () => {
  return (
    <AllProvider>
      <Header />
        <SH2>全て</SH2>
        <All />
      <Footer />
    </AllProvider>
  )
}

const SH2 = styled.h2`
  margin: 60px auto;
  padding:20px;
  font-size: 40px;
  text-align: center;
  background-color: #31e27b;
  color: #fff;
  width:10%;
  border-radius: 10px;
`