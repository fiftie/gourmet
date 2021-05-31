import { createSlice } from '@reduxjs/toolkit'

export const todoSlice = createSlice({
  name: 'todo',
  initialState: {
    allState:{
      name: "",
      tel: "",
      streetAddress: "",
      memo: "",
      category: "",
    }
  },
  reducers: {
    onClickadd: () => {
      if (allState === "") return;
      const newAllState = [...allState,{
        id: allState.length,
        name: name,
        tel: tel,
        streetAddress: streetAddress,
        memo: memo
      }];
      setAllState(newAllState);
    },
  },
})

export const { onClickadd } = counterSlice.actions

export default counterSlice.reducer
