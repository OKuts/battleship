import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {controlIsReady, initFlot, isCoordinatesIn, isTryToPlace} from "../utils";
import {IInitialFlot} from "./types/ship";
import {getSeaArr} from "../utils/getSeaArr";
import {getRandomIndex} from "../utils/getRandomIndex";

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
  rememberX: 0,
  rememberY: 0,
  rememberDirection: true
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
      state.isReady = false
    },

    initFlotAuto(state) {
      state.flot = initFlot()
      state.isReady = false
      let emptyCells = getSeaArr()
      let count = 9
      state.flot.forEach((ship, i) => {
        do {
          const randomDirection = !!getRandomIndex(2)
          const randomCell = getRandomIndex(emptyCells.length)
          const cell = emptyCells[randomCell]
          const x = Number(cell[1])
          const y = Number(cell[0])
          if (isCoordinatesIn(x, y, randomDirection, Number(ship.id[0]))) {
            const tempFlot = [...state.flot]
            tempFlot[i] = {
              ...state.flot[i],
              id: ship.id + y + x,
              x: Number(cell[1]) * 30,
              y: Number(cell[0]) * 30,
              direction: randomDirection,
            }
            console.log(isTryToPlace(tempFlot));
            console.log(tempFlot);
            
            if (isTryToPlace(tempFlot)) {
              state.flot[i] = tempFlot[i]
              
              count--
            }
          } 
        } while (count > 0)
      })
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
      if (state.selectedShip !== null) {
        const ship = {...state.flot[state.selectedShip]}
        const selectedShip = state.flot[state.selectedShip]
        const x = Math.round(ship.x / 30)
        const y = Math.round(ship.y / 30)
        let flag = true
        if (isCoordinatesIn(x, y, ship.direction, Number(ship.id[0]))) {
          ship.x = x * 30
          ship.y = y * 30
          ship.isOnSea = true
          const tryFlot = [...state.flot]
          tryFlot[state.selectedShip] = ship
          if (isTryToPlace(tryFlot)) {
            state.flot[state.selectedShip] = ship
            selectedShip.id = ship.id.slice(0, 3) + y + x
            flag = false
          } 
        } 
        if (flag) {
          selectedShip.x = state.rememberX
          selectedShip.y = state.rememberY
          selectedShip.direction = state.rememberDirection
        }
        state.selectedShip = null
        state.rerender = !state.rerender
      }
    },

    setIsReady(state) {
      state.isReady = controlIsReady(state.flot)
    },

    setRemember(state) {
      if (state.selectedShip !== null) {
        state.rememberX = state.flot[state.selectedShip].x
        state.rememberY = state.flot[state.selectedShip].y
        state.rememberDirection = state.flot[state.selectedShip].direction
      }
    }

  },
})

export const {
  setSelectedShip, changePositionShip, updateFlot, setIsCtrlPressed,
  setBegin, setDxDy, setMouseLeftPress, setRemember, setIsReady, initFlotAuto
} = flotSlice.actions
export default flotSlice.reducer
