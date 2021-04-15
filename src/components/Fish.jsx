import React, { useContext } from "react";
import styled from "styled-components";
import testimg from "../image/Gourmet.jpeg";
import { Footer } from '../organism/Footer'
import { Header } from '../organism/Header'
import { InputContext } from "../provider/InputProvider";

export const Fish = () => {
  const { fishState } = useContext(InputContext);
  return (
    <>
      <Header />
        <SH2>魚類</SH2>
        <SUl>
        {
        fishState.map((todo, i) => {
          return(
            <SLi key={i}>
              <img src={testimg} />
              <h3>{todo.name}</h3>
              <p>{todo.tel}</p>
              <p>{todo.streetAddress}</p>
              <p>{todo.memo}</p>
            </SLi>
          )
        })
      }
        </SUl>
      <Footer />
    </>
  )
}

const SH2 = styled.h2`
  margin: 0 auto;
  padding: 16px;
  text-align: center;
  background-color: #4bc7f8;
  border-radius:10px;
  font-size:30px;
  font-weight: bold;
  color: #333;
  width:18%; 
`
const SUl = styled.ul`
  padding-bottom:100px;
`
const SLi = styled.li`
  margin: 20px auto;
  display:flex;
  justify-content: space-around;
  align-items: center;
  background-color: gray;
  width:50%;

  img{
    width:16%;
  }
  h3{
    font-size: 28px;
    width:50%;
  }
`