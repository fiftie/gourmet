import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos:[],
  },
  reducers: {
    pushTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    }
  }
})

export const { pushTodo } = todoSlice.actions

export default todoSlice.reducer
