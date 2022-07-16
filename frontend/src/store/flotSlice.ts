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

    setSelectedShip(state, action: PayloadAction<number>) {
    },

    updateFlot (state) {
      state.flot = initialState.flot
    },

    removeSelectedShip(state) {
    },

    backSelectedShip(state) {
    },

    changePositionSelectedShip(state, action) {
    },
  },
})

export const {
  setSelectedShip, removeSelectedShip, changePositionSelectedShip, backSelectedShip, updateFlot
} = flotSlice.actions
export default flotSlice.reducer