import React, { useState, useContext } from "react";
import testimg from "../../image/Gourmet.jpeg";
import styled from "styled-components";
import { InputContext } from "../../provider/InputProvider";

export const All = () => {
  const {allState, setAllState } = useContext(InputContext);
  return (
    <SUl>
      {
        allState.map((todo, index) => {
          return(
            <SLi key={todo}>
              <img src={testimg} />
              <h3>{todo}</h3>
            </SLi>
          )
        })
      }
    </SUl>
  )
}

const SUl = styled.ul`
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