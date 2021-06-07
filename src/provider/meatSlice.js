import { createSlice } from '@reduxjs/toolkit'

export const meatSlice = createSlice({
  name : 'meat',
  initialState: {
    meats:[],
  },
  reducers: {
    psuhMeat(state, action) {
      state.meats = [...state.meats, action.payload];
    }
  }
})

export const { psuhMeat } = meatSlice.actions

export default meatSlice.reducer