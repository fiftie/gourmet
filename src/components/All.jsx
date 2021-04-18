import React, { useContext } from "react";
import testimg from "../image/Gourmet.jpeg";
import styled from "styled-components";
import { InputContext } from "../provider/InputProvider";
import { Header } from "../organism/Header";
import { Footer } from "../organism/Footer";

export const All = () => {
  const { allState, setAllState } = useContext(InputContext);

  const onClickDelete = (i) => {
    const newAllState = [...allState];
    newAllState.splice(i,1);
    setAllState(newAllState);
  }

  return (
    <>
    <Header />
    <SH2>全て</SH2>
    <SUl>
      {
        allState.map((todo, i) => {
          return(
            <SLi key={i}>
              <img src={testimg} />
              <h3>{todo.name}</h3>
              <p>{todo.tel}</p>
              <p>{todo.streetAddress}</p>
              <p>{todo.memo}</p>
              <SBtn onClick={() => onClickDelete(i)}>削除</SBtn>
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
  background-color: #fc7979;
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

const SBtn = styled.button`
  padding: 16px 0;
  display: block;
  background-color:#fff;
  box-shadow: 0 4px 0 #d8d8d8;
  border-radius: 10px;
  width: 10%;
  text-align: center;
`