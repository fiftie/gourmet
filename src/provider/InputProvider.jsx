import { createContext, useState } from "react";

export const InputContext = createContext({});

export const InputProvider = (props) => {
  const { children } = props;
  const [allState, setAllState] = useState([]);
  const [sendData, setSendData] = useState({name: "", tel: "", detail: ""})

  console.log("sendData",sendData)

  const onClickAdd = () => {
    if(sendData === "") return;
    const newAllState = [...allState, sendData];
    setAllState(newAllState);
    setSendData("");
  }

  

  const testObj = {
    name: "test1",
    tel: "test2",
    detail: "test13"
  } 
  

  return(
    <InputContext.Provider value={{allState, setAllState, onClickAdd, sendData, setSendData, testObj }} >
      { children }
    </InputContext.Provider>
  )
}