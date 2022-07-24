import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initFlot} from "../utils";
import {IInitialFlot} from "./types/ship";


const initialState: IInitialFlot = {
  flot: initFlot(),
  selectedShip: null,
  isReady: false,
  rerender: false,
  isCtrlPressed: false,
}

export const flotSlice = createSlice({
  name: 'ships',
  initialState,

  reducers: {

    setSelectedShip(state, action: PayloadAction<number | null>) {
      state.selectedShip = action.payload
    },

    updateFlot(state) {
      state.flot = initFlot()
    },

    changeDirection(state) {
      if (state.selectedShip !== null) {
        state.flot[state.selectedShip].direction = !state.flot[state.selectedShip].direction
        state.rerender = !state.rerender
      }
    },

    changePositionShip(state, action) {
      if (state.selectedShip !== null) {
        state.flot[state.selectedShip].x = action.payload.x
        state.flot[state.selectedShip].y = action.payload.y
        state.rerender = !state.rerender
      }
    },

    setIsCtrlPressed(state, action: PayloadAction<boolean>) {
      state.isCtrlPressed = action.payload ? !state.isCtrlPressed : action.payload
    },


  },
})

export const {
  setSelectedShip, changePositionShip, updateFlot, changeDirection, setIsCtrlPressed
} = flotSlice.actions
export default flotSlice.reducer
