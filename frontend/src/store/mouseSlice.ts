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
    setDxDy (state, action) {
      state.dx = action.payload.x
      state.dy  = action.payload.y
    },

    setMouseLeftPress(state, action: PayloadAction<boolean>) {
      state.isMouseLeftPress = action.payload
    }
  },
})

export const { setDxDy, setMouseLeftPress } = mouseSlice.actions
export default mouseSlice.reducer
