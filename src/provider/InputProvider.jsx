import { createContext, useState } from "react";

export const InputContext = createContext({});

export const InputProvider = (props) => {
  const { children } = props;
  const [todoText, setTodoText] = useState("");
  const onChangeTodo =(e) => setTodoText(e.target.value);
  const [allState, setAllState] = useState(["aiuoooo"]);

  const onClickAdd = () => {
    const newAllState = [...allState, todoText];
    setAllState(newAllState);
    setTodoText();
  }


  return(
    <InputContext.Provider value={{ todoText, setTodoText, onChangeTodo, allState, setAllState, onClickAdd }} >
      { children }
    </InputContext.Provider>
  )
}