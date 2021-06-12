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
    deleteTodo(state,action, i) {
      state.todos = [...action.payload];
    },
    deleteMeat(state,action) {
      state.meats = [...action.payload];
    },
    deleteFish(state,action) {
      state.fishs = [...action.payload];
    },
    deleteNoodle(state,action) {
      state.noodles = [...action.payload];
    }
  }
})

export const { pushTodo, pushMeat, pushFish, pushNoodle, deleteTodo, deleteMeat, deleteFish, deleteNoodle } = todoSlice.actions

export default todoSlice.reducer
