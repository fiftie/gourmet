import { createSlice } from '@reduxjs/toolkit'
import { todos } from '../provider/todoSlice'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos:[],
  },
  reducers: {
    pushTodo(state, action) {
      todos = [...state.todos, action];
    },
  },
})

export const { pushTodo } = todoSlice.actions

export default todoSlice.reducer
