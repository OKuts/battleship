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
    },

    changeShipDirection(state) {
      if (state.selectedShip !== null) {
        state.flot[state.selectedShip].direction = Direction.ROW ? Direction.COLUMN : Direction.ROW
      }
    }
  },
})

export const {
  setCurrentShip, removeCurrentShip, changePositionSelectedShip, changeShipDirection
} = shipsSlice.actions
export default shipsSlice.reducer
