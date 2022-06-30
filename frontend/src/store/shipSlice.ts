import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import { initFlot } from "../utils/initFlot";

const initialState = {
  flot: initFlot(),
}

export const shipsSlice = createSlice({
  name: 'ships',
  initialState,

  reducers: {
    changeIsMove(state, action) {
      const currentShip = state.flot.find(ship => ship.id === action.payload)
      if (currentShip) {
        currentShip.isMove = !currentShip.isMove

      }
    },
  },
})

export const { changeIsMove } = shipsSlice.actions
export default shipsSlice.reducer
