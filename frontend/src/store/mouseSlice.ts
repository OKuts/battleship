import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  isMouseLeftPress: false,
}

export const mouseSlice = createSlice({
  name: 'mouse',
  initialState,

  reducers: {
    setIsMouseLeftPress(state, action: PayloadAction<boolean>) {
      state.isMouseLeftPress = action.payload
    },
  },
})

export const { setIsMouseLeftPress } = mouseSlice.actions
export default mouseSlice.reducer
