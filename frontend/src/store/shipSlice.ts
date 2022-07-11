import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initFlot} from "../utils";
import { IInitialState, Place} from "./types/ship";


const initialState: IInitialState = {
  flot: initFlot(),
  selectedShip: null
}

export const shipsSlice = createSlice({
  name: 'ships',
  initialState,

  reducers: {

    setSelectedShip(state, action: PayloadAction<number>) {
      state.selectedShip = action.payload
    },

    updateFlot (state) {
      state.flot = initialState.flot
      state.selectedShip = null
    },

    removeSelectedShip(state) {
      if (state.selectedShip !== null) state.flot[state.selectedShip].place = Place.SEA
      state.selectedShip = null
    },

    backSelectedShip(state) {
      if (state.selectedShip !== null) state.flot[state.selectedShip].place = Place.PORT
      state.selectedShip = null
    },

    changePositionSelectedShip(state, action) {
      if (state.selectedShip !== null) {
        state.flot[state.selectedShip].x = action.payload.x
        state.flot[state.selectedShip].y = action.payload.y
      }
    },
  },
})

export const {
  setSelectedShip, removeSelectedShip, changePositionSelectedShip, backSelectedShip, updateFlot
} = shipsSlice.actions
export default shipsSlice.reducer
