import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFieldMy} from "./types/field";


const initialState: IFieldMy = {
  beginX: null,
  beginY: null
}

export const fieldSlice = createSlice({
  name: 'fields',
  initialState,

  reducers: {
    setBegin (state, action: PayloadAction<IFieldMy>) {
      const {beginX, beginY} = action.payload
      state.beginX = beginX
      state.beginY = beginY
    },
  },
})

export const {
  setBegin
} = fieldSlice.actions
export default fieldSlice.reducer
