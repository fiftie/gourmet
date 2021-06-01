import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialTodoState: {
    todo:{
      name: "",
      tel: "",
      streetAddress: "",
      memo: "",
      category: "",
    },
    todoState:{
      todos:[]
    },
  },
  reducers: {
    // 現在のtodosの末尾に1つtodoを追加する。
    pushTodo(todoState,PayloadAction) {
      todos = [...todos, todo];
    },
  },
})

export const { onClickadd } = todoSlice.actions

export default todoSlice.reducer
