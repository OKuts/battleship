import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initFlot} from "../utils";
import {IInitialFlot} from "./types/ship";



const initialState: IInitialFlot = {
  flot: initFlot(),
  selectedShip: null,
  isReady: false
}

export const flotSlice = createSlice({
  name: 'ships',
  initialState,

  reducers: {

    setSelectedShip(state, action: PayloadAction<number | null>) {
      state.selectedShip = action.payload
    },

    updateFlot (state) {
      state.flot = initFlot()
    },

    removeSelectedShip(state) {
    },

    backSelectedShip(state) {
    },

    changePositionShip(state, action) {
      if (state.selectedShip !== null) {
        state.flot[state.selectedShip].x = action.payload.x
        state.flot[state.selectedShip].y = action.payload.y
      }

    },
  },
})

export const {
  setSelectedShip, changePositionShip, updateFlot
} = flotSlice.actions
export default flotSlice.reducer
