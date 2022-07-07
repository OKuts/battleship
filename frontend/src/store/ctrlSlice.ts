import {createSlice, PayloadAction} from "@reduxjs/toolkit";

const initialState = {
  isCtrlPressed: false,
}

export const ctrlSlice = createSlice({
  name: 'ctrl',
  initialState,

  reducers: {

    setIsCtrlPressed(state, action: PayloadAction<boolean>) {
      state.isCtrlPressed = action.payload
    },
  },
})

export const { setIsCtrlPressed } = ctrlSlice.actions
export default ctrlSlice.reducer
