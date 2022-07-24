import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initFlot} from "../utils";
import {IInitialFlot} from "./types/ship";

const initialState: IInitialFlot = {
  flot: initFlot(),
  selectedShip: null,
  isReady: false,
  rerender: false,
  isCtrlPressed: false,
  beginX: 0,
  beginY: 0,
  isMouseLeftPress: false,
  dx: 0,
  dy: 0,
  rememberX: null,
  rememberY: null,
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

    setIsCtrlPressed(state, action: PayloadAction<boolean>) {
      if (state.selectedShip !== null) {
        state.isCtrlPressed = action.payload ? !state.isCtrlPressed : action.payload
        state.flot[state.selectedShip].direction = !state.flot[state.selectedShip].direction
      }
    },

    changePositionShip(state, action) {
      if (state.selectedShip !== null) {
        state.flot[state.selectedShip].x = action.payload.x
        state.flot[state.selectedShip].y = action.payload.y
        state.rerender = !state.rerender
      }
    },

    setBegin(state, action) {
      const {beginX, beginY} = action.payload
      state.beginX = beginX
      state.beginY = beginY
    },

    setDxDy(state, action) {
      state.dx = action.payload.x
      state.dy = action.payload.y
    },

    setMouseLeftPress(state, action: PayloadAction<boolean>) {
      state.isMouseLeftPress = action.payload
      state.selectedShip = null
      // if (state.selectedShip !== null) {
      //   state.flot[state.selectedShip].x = state.rememberX
      //   state.flot[state.selectedShip].y = state.rememberY
      // }
    },

    setRemember(state) {
      if (state.selectedShip !== null) {
        state.rememberX = state.flot[state.selectedShip].x
        state.rememberY = state.flot[state.selectedShip].y
      }
    },

  },
})

export const {
  setSelectedShip, changePositionShip, updateFlot, setIsCtrlPressed,
  setBegin, setDxDy, setMouseLeftPress, setRemember
} = flotSlice.actions
export default flotSlice.reducer
