import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    todos:[],
    meats:[],
    fishs:[],
    noodles:[]
  },
  reducers: {
    pushTodo(state, action) {
      state.todos = [...state.todos, action.payload];
    },
    pushMeat(state, action) {
      state.meats = [...state.meats, action.payload];
    },
    pushFish(state, action) {
      state.fishs = [...state.fishs, action.payload];
    },
    pushNoodle(state, action) {
      state.noodles = [...state.noodles, action.payload];
    },
    deleteTodo(state,actuon) {
      state.todos = [...actuon.payload];
    }
  }
})

export const { pushTodo, pushMeat, pushFish, pushNoodle, deleteTodo } = todoSlice.actions

export default todoSlice.reducer
