import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IMouse} from "./types/mouse";

const initialState: IMouse = {
  isMouseLeftPress: false,
  dx: null,
  dy: null
}

export const mouseSlice = createSlice({
  name: 'mouse',
  initialState,

  reducers: {
    setIsMouseLeftPress(state, action: PayloadAction<boolean>) {
      state.isMouseLeftPress = action.payload
    },

    setDxDy (state, action) {
      state.dx = action.payload.x
      state.dy  = action.payload.y
    }
  },
})

export const { setIsMouseLeftPress, setDxDy } = mouseSlice.actions
export default mouseSlice.reducer
