import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initFlot} from "../utils";
import {IInitialFlot} from "./types/ship";


const initialState: IInitialFlot = {
  flot: initFlot(),
  selectedShip: null,
  isReady: false,
  rerender: false,
  isCtrlPressed: false,
  beginX: null,
  beginY: null,
  isMouseLeftPress: false,
  dx: null,
  dy: null,
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
  setSelectedShip, changePositionShip, updateFlot, changeDirection, setIsCtrlPressed,
  setBegin, setDxDy, setMouseLeftPress, setRemember
} = flotSlice.actions
export default flotSlice.reducer
