import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {
  controlIsReady, getRandomIndex, getSeaArr, getShipAround,
  initFlot, isCoordinatesIn, isTryToPlace, shotToShip
} from "../utils";
import {IInitialFlot} from "./types/ship";
import {getField} from "../utils/getField";


const initialState: IInitialFlot = {
  flot: initFlot(),
  enemyField: {},
  myField: {},
  shotMyField: {},
  shotEnemyField: {},
  selectedShip: null,
  isReady: false,
  gameText: 'Try',
  rerender: false,
  isCtrlPressed: false,
  begin: [],
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
      state.gameText = 'Try'
    },

    initFlotAuto(state) {
      state.flot = initFlot()
      state.isReady = false
      state.gameText = 'Try'
      let emptyCells = getSeaArr()
      state.flot.forEach((ship, i) => {
        let flag = true
        do {
          let yx = ''
          const randomDirection = !!getRandomIndex(2)
          const randomCell = getRandomIndex(emptyCells.length)
          const cell = emptyCells[randomCell]
          const x = Number(cell[1])
          const y = Number(cell[0])
          yx += `${y}${x}`
          if (isCoordinatesIn(x, y, randomDirection, Number(ship.id[0]))) {
            const tempFlot = [...state.flot]
            tempFlot[i] = {
              ...state.flot[i],
              id: ship.id + y + x,
              x: Number(cell[1]) * 30,
              y: Number(cell[0]) * 30,
              direction: randomDirection,
              isOnSea: true
            }
            if (isTryToPlace(tempFlot)) {
              state.flot[i] = tempFlot[i]
              const [shipAround] = getShipAround(tempFlot[i])
              emptyCells = emptyCells.filter(el => !shipAround.includes(el))
              flag = false
            }
          }
        } while (flag)
      })

      !JSON.stringify(state.enemyField)[2]
        ? state.enemyField = getField(state.flot)
        : state.myField = getField(state.flot)
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
      state.begin.push(action.payload)
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
          const tryFlot = [...state.flot]
          tryFlot[state.selectedShip] = ship
          if (isTryToPlace(tryFlot)) {
            state.flot[state.selectedShip] = ship
            selectedShip.id = ship.id.slice(0, 3) + y + x
            flag = false
            if (controlIsReady(state.flot)) state.gameText = 'Ready'
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
      if (!state.isReady) {
        state.isReady = true
        state.gameText = 'Go'
      }
    },

    setMessageReady(state) {
      state.gameText = 'Ready'
    },

    changeMessage(state, action) {
      state.gameText = action.payload
    },

    setRemember(state) {
      if (state.selectedShip !== null) {
        state.rememberX = state.flot[state.selectedShip].x
        state.rememberY = state.flot[state.selectedShip].y
        state.rememberDirection = state.flot[state.selectedShip].direction
      }
    },

    updateSeaEnemy(state) {
      state.enemyField = {}
      state.shotEnemyField = {}
      state.shotMyField = {}
      state.rerender = !state.rerender
    },

    rerender (state) {
      state.rerender = !state.rerender
    },

    nextStep(state, action: PayloadAction<string>) {
      state.shotEnemyField[action.payload] = !!state.enemyField[action.payload] && true
    },

    nextBotStep(state, action: PayloadAction<string>) {
      const wound = shotToShip(state.flot, action.payload)
      if (!!wound) {
        const [n, cell] = wound
        state.flot[+n].wounds[+cell] = true
      }
      state.shotMyField[action.payload] = !!state.myField[action.payload]
    }
  },
})

export const {
  setSelectedShip, changePositionShip, updateFlot, setIsCtrlPressed,
  changeMessage, setBegin, setDxDy, setMouseLeftPress, setRemember,
  setIsReady, initFlotAuto, setMessageReady,
  nextStep, updateSeaEnemy, nextBotStep, rerender
} = flotSlice.actions
export default flotSlice.reducer
