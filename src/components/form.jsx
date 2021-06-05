import React, { useState, useContext } from 'react'
import styled from "styled-components";
import { Header } from '../organism/Header'
import { Footer } from '../organism/Footer'
import { Image } from './Image';

import { useDispatch, useSelector } from "react-redux";
import { todoSlice } from "../provider/todoSlice";

export const Form = () => {
  const [ name, setName ] = useState("");
  const [ tel, setTel ] = useState("");
  const [ streetAddress, setStreetAddress ] = useState("");
  const [memo, setMemo] = useState("");
  const [category, setCategory] = useState("");

  const dispatch = useDispatch();
  // const todos = useSelector(state => state.todos);

  const pushTodo = () => dispatch(todoSlice.actions.pushTodo({
    name,
    tel,
    streetAddress,
    memo,
  }));

  return (
    <SLayout>
    <Header />
    <SH2>登録画面</SH2>
    <SForm>
      <Image />
      <label>店名</label>
      <input placeholder="店名" value={name} onChange={(e) => {setName(e.target.value )}}/>
      <label>電話番号</label>
      <input placeholder="電話番号" value={tel} onChange={(e) => {setTel(e.target.value )}}/>
      <label>住所</label>
      <input placeholder="住所" value={streetAddress} onChange={(e) => {setStreetAddress(e.target.value)}} />
      <label for="category">カテゴリー</label>
      <select id="category" value={category} onChange={(e) => {setCategory(e.target.value)}}>
        <option value="">カテゴリー選択</option>
        <option value="meat">肉</option>
        <option value="fish">魚</option>
        <option value="noodle">麺</option>
      </select>
      <label>メモ</label>
      <textarea placeholder="メモ" value={memo} onChange={(e) => {setMemo(e.target.value)}}></textarea>

      <button type="button" onClick={pushTodo}>登録</button>
    </SForm>
    <Footer />
    </SLayout>
  )
}
const SLayout = styled.div`
  margin: 0 auto;
  width:100%;
  max-width:1440px;
`


const SH2 = styled.h2`
  font-size:40px;
  text-align:center;
  @media screen and (max-width: 425px){
    font-size:30px;
  }
`

const SForm = styled.form`
  margin: 60px auto;
  margin-bottom: 120px;
  padding: 10px;
  display: block;
  background-color: #e6e6e6;
  width: 60%;
  @media screen and (max-width: 768px){
    width: 90%;
  }
  label{
    margin-top:20px;
    margin: auto;
    display:block;
    font-size:24px;
    width:80%;
  }
  input{
    margin:0 auto;
    display: block;
    background-color: #FFF;
    width:80%;
    height:30px;
    border: 1px solid #aaa;
  }
  textarea{
    margin: 0 auto;
    display:block;
    background-color: #FFF;
    width:80%;
    height:120px;
    border: 1px solid #aaa;
  }
  select{
    margin: 0 auto;
    display: block;
    background-color: #fff;
    border: 1px solid #aaa;
    width:80%;
  }
  button{
    margin: 20px auto;
    padding: 20px;
    display: block;
    background-color: #9CFAE4;
    border-radius:20px;
    box-shadow: 0 4px 0 #8ed1c2;
    &:hover{
      box-shadow: 0 0 0;
      transform: translateY(3px);
    }
  }
`
