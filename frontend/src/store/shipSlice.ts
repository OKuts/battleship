import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initFlot} from "../utils/initFlot";
import {Direction, IInitialState, Place} from "./types/ship";


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

    // changeShipDirection(state, action: PayloadAction<boolean>) {
    //   if (state.selectedShip !== null) {
    //     state.flot[state.selectedShip].direction = action.payload ? Direction.COLUMN : Direction.ROW
    //   }
    // }
  },
})

export const {
  setSelectedShip, removeSelectedShip, changePositionSelectedShip, backSelectedShip
} = shipsSlice.actions
export default shipsSlice.reducer
