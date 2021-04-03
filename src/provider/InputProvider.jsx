import { createContext, useState } from "react";

export const InputContext = createContext({});

export const InputProvider = (props) => {
  const { children } = props;
  const [todoText, setTodoText] = useState("");
  const [tellText, setTellText] = useState("");
  const onChangeTodo = (e) => setTodoText(e.target.value);
  const onChangeTell = (e) => setTellText(e.target.value);
  const [allState, setAllState] = useState([]);

  // const store = {
  //  name: todoText,
  //  tell: tellText
  // }

  // console.log(store);

  const onClickAdd = () => {
    if(todoText === "") return
    const newAllState = [...allState, todoText];
    setAllState(newAllState);
    setTodoText("");
  }

  const onClickTell = () => {
    if(tellText === "") return;
    const newTellState = [...allState, tellText];
    setAllState(newTellState);
    setTellText("");
  }

  const onClickAllText = () => {
    onClickAdd();
    onClickTell();
  }


  return(
    <InputContext.Provider value={{ todoText, setTodoText, onChangeTodo, allState, setAllState, tellText, setTellText, onChangeTell, onClickAllText }} >
      { children }
    </InputContext.Provider>
  )
}