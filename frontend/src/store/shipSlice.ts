import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { initFlot } from "../utils/initFlot";

const initialState = {
  flot: initFlot(),
}

export const shipsSlice = createSlice({
  name: 'ships',
  initialState,

  reducers: {
    // selectMyCell(state, action: PayloadAction<string>) {
    //   console.log(action.payload, ' My field')
    // },
  },
})

export const {  } = shipsSlice.actions
export default shipsSlice.reducer
