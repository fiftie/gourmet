import React, { useContext } from "react";
import testimg from "../image/Gourmet.jpeg";
import styled from "styled-components";
import { InputContext } from "../provider/InputProvider";
import { Header } from "../organism/Header";
import { Footer } from "../organism/Footer";

export const All = () => {
  const { allState, testObj } = useContext(InputContext);
  console.log("all2",allState)
  console.log("All.jsx-testObj",testObj);
  return (
    <>
    <Header />
    <h2>全て</h2>
    <SUl>
      {
        allState.map((todo, i) => {
          return(
            <SLi key={i}>
              <img src={testimg} />
              <h3>{todo.name}</h3>
              <p>{todo.tel}</p>
              <p>{todo.detail}</p>
            </SLi>
          )
        })
      }
    </SUl>
    <Footer />
    </>
  )
}

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