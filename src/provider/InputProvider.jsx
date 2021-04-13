import { createContext, useState } from "react";

export const InputContext = createContext({});

export const InputProvider = (props) => {
  const { children } = props;
  const [allState, setAllState] = useState([]);

  const onClickAdd = (name,tel, detail) => {
    if(name === "") return;
    setAllState([...allState, {
      name: name,
      tel: tel,
      detail: detail
    }]);
  }

  return(
    <InputContext.Provider value={{onClickAdd, allState, setAllState}} >
      { children }
    </InputContext.Provider>
  )
}