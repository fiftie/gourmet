import { createContext, useState } from "react";

export const InputContext = createContext({});

export const InputProvider = (props) => {
  const { children } = props;
  const [allState, setAllState] = useState([]);
  const [meatState, setMeatState] = useState([]);

  const onClickAdd = (name,tel,streetAddress,setName,setTel,setStreetAddress, memo,setMemo, category,setCategory) => {
    if(name === "") {
      alert("店名を入力してください。");
      return
    };
    setAllState([...allState, {
      name: name,
      tel: tel,
      streetAddress: streetAddress,
      memo: memo
    }]);
    setName("");
    setTel("");
    setStreetAddress("");
    setMemo("");
    setCategory("");
    console.log("category--onclick", category);
  }

  return(
    <InputContext.Provider value={{onClickAdd, allState, setAllState, meatState, setMeatState}} >
      { children }
    </InputContext.Provider>
  )
}