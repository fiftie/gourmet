import { createContext, useState } from "react";

export const InputContext = createContext({});

export const InputProvider = (props) => {
  const { children } = props;
  const [allState, setAllState] = useState([]);
  const [meatState, setMeatState] = useState([]);
  const [fishState, setFishState] = useState([]);
  const [noodleState, setNoodleState] = useState([]);

  const onClickAdd = (name,tel,streetAddress,setName,setTel,setStreetAddress, memo,setMemo, category,setCategory) => {
    if(name === "") {
      alert("店名を入力してください。");
      return
    };
    setAllState([...allState, {
      id: allState.length,
      name: name,
      tel: tel,
      streetAddress: streetAddress,
      memo: memo
    }]);
    if(category === "meat"){
      setMeatState([...meatState, {
        id: meatState.length,
        name: name,
        tel: tel,
        streetAddress: streetAddress,
        memo: memo
      }]);
    }
    if(category === "fish"){
      setFishState([...fishState, {
        id: fishState.length,
        name: name,
        tel: tel,
        streetAddress: streetAddress,
        memo: memo
      }]);
    }
    if(category === "noodle"){
      setNoodleState([...noodleState, {
        id: noodleState.length,
        name: name,
        tel: tel,
        streetAddress: streetAddress,
        memo: memo
      }]);
    }
    setName("");
    setTel("");
    setStreetAddress("");
    setMemo("");
    setCategory("");
  }

  return(
    <InputContext.Provider value={{onClickAdd, allState, setAllState, meatState, setMeatState,fishState, setFishState,noodleState, setNoodleState}} >
      { children }
    </InputContext.Provider>
  )
}