import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initFlot} from "../utils/initFlot";
import {IInitialState, Place} from "./types/ship";


const initialState: IInitialState = {
  flot: initFlot(),
  selectedShip: null
}

export const shipsSlice = createSlice({
  name: 'ships',
  initialState,

  reducers: {

    setCurrentShip(state, action: PayloadAction<number>) {
      state.selectedShip = action.payload
    },

    removeCurrentShip(state) {
      if (state.selectedShip !== null) state.flot[state.selectedShip].place = Place.SEA
      state.selectedShip = null
    },

    changePositionSelectedShip(state, action) {
      if (state.selectedShip !== null) {
        state.flot[state.selectedShip].x = action.payload.x
        state.flot[state.selectedShip].y = action.payload.y
      }
    }
  },
})

export const {
  setCurrentShip, removeCurrentShip, changePositionSelectedShip
} = shipsSlice.actions
export default shipsSlice.reducer
