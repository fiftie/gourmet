import { configureStore } from '@reduxjs/toolkit'
import todoReducer from '../provider/todoSlice'
import meatReducer from '../provider/meatSlice'

export default configureStore({
  reducer: {
    todo: todoReducer,
    meat: meatReducer
  },
})