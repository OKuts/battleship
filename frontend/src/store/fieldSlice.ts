import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {ICell, IFieldState, ISetCoordinates} from "./types/field";
import {initField} from "../utils";

const initialState: IFieldState = {
  fieldMy: initField(false),
  fieldEnemy: initField(true),
  delta: {x: 0, y: 0},
  overCell: {x: null, y: null},
  client: {x: null, y: null}
}

export const fieldSlice = createSlice({
  name: 'fields',
  initialState,

  reducers: {
    cleanShip(state, action: PayloadAction<string>) {
      const id = action.payload
      state.fieldMy.arr = state.fieldMy.arr.map((line: ICell[]) =>
        line.map((cell: ICell) => cell.idShip && cell.idShip[0] === id[0]
          ? ({...cell, idShip: ''})
          : cell))
    },

    selectEnemyCell(state, action: PayloadAction<string>) {
      state.fieldEnemy.arr[Number(action.payload[0])][Number(action.payload[1])].isUse = true
    },

    updateFields(state) {
      state.fieldEnemy = initialState.fieldEnemy
      state.fieldMy = initialState.fieldMy
    },

    setCoordinates(state, action: PayloadAction<ISetCoordinates>) {
      const {name, x, y} = action.payload
      // @ts-ignore
      state[name].x = x
      // @ts-ignore
      state[name].y = y
    },

    placeShip (state, action) {
      const { x, y } = state.overCell
      if ( x!== null && y !== null) {
        const { ship, isCtrlPressed } = action.payload
        const start = isCtrlPressed ? y : x
        for (let i = start; i < start + ship.size; i++) {
          isCtrlPressed
            ? state.fieldMy.arr[i][x].idShip = `${ship.id}${i-start}`
            : state.fieldMy.arr[y][i].idShip = `${ship.id}${i-start}`
        }
      }
    }
  },
})

export const {
  selectEnemyCell, updateFields, placeShip, setCoordinates, cleanShip
} = fieldSlice.actions
export default fieldSlice.reducer
