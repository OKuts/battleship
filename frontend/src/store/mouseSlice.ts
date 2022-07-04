import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  isLeftDown: false,
  dX: 0,
  dY: 0,
}

export const mouseSlice = createSlice({
  name: 'mouse',
  initialState,

  reducers: {
    setDxDy(state, action) {
      state.dX = action.payload.x
      state.dY = action.payload.y
    },
  },
})

export const { setDxDy } = mouseSlice.actions
export default mouseSlice.reducer
