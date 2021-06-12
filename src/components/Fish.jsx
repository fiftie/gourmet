import React, { useContext } from "react";
import styled from "styled-components";
import testimg from "../image/Gourmet.jpeg";
import { DetailsModal } from "../organism/DetailsModal";
import { Footer } from '../organism/Footer'
import { Header } from '../organism/Header'
import { InputContext } from "../provider/InputProvider";
import { useDisclosure } from "@chakra-ui/react";
import { useFishSelect } from "../hooks/useSelect";
import {useSelector} from "react-redux";
import { useDispatch } from "react-redux";
import { deleteFish } from "../provider/todoSlice";

export const Fish = () => {
  const { fishState, setFishState } = useContext(InputContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { onSelectState, selectedState } = useFishSelect();

  const { fishs } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  const onClickDelete = (i) => {
    const newFishState = [...fishs];
    newFishState.splice(i,1);
    dispatch(deleteFish(newFishState))
  }

  const onClickOpen = (i) => {
    onSelectState({ fishState, i, onOpen });
  }


  return (
    <>
      <Header />
        <SH2>魚類</SH2>
        <SUl>
        {
        fishs.map((todo, i) => {
          return(
            <SLi key={i}>
              <img src={testimg} alt="イメージ画像" />
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
      <DetailsModal isOpen={isOpen} onClose={onClose} fishState={fishState} selectedState={selectedState} />
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
  @media screen and (max-width: 768px){
    width: 30%;
  }
  @media screen and (max-width: 768px){
    font-size:24px;
  }
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
  @media screen and (max-width: 768px){
    width: 80%;
  }
  @media screen and (max-width: 425px){
    width: 90%;
  }
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
  @media screen and (max-width: 768px){
    padding: 10px 0;
    width: 20%;
  }
  @media screen and (max-width: 320px){
    padding: 6px 0;
    width: 20%;
    font-size:12px;
  }
`