import React, { useContext, useState } from "react";
import styled from "styled-components";
import { RegistrationBtn } from "../../atom/btn/RegistrationBtn";
import { MemoInput } from "../../molecule /input/MemoInput";
import { NameInpiut } from "../../molecule /input/NameInpiut";
import { Select } from "../../molecule /input/Select";
import { Test } from "../../molecule /Test";


export const Top = () => {
  
  return(
    <>
    <SSection>
      <Test />
      <SWaku>
        <NameInpiut text="店名" placeholder="店名" />
        {/* <NameInpiut text="電話番号" placeholder="090-000-999" />
        <NameInpiut text="住所" placeholder="東京都○○○" /> */}
        <MemoInput text="メモ" placeholder="メモ"></MemoInput>
        <Select category1="肉" category2="魚" category3="麺" text="カテゴリー"></Select>
        <RegistrationBtn>登録</RegistrationBtn>
      </SWaku>
    </SSection>
    
    </>
  )
}

const SSection = styled.section`
  margin: 100px auto;
  display:flex;
  justify-content: space-between;
  align-items: center;
  background-color: #e0e0e0;
  width:70%;
  height:600px;
`

const SWaku = styled.div`
  width:60%;
`