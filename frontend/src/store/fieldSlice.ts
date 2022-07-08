import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFieldState} from "./types/field";
import {initField} from "../utils/initField";

const initialState: IFieldState = {
  fieldMy: initField(false),
  fieldEnemy: initField(true),
  delta: {x: 0, y: 0},
  overCell: {x: -5, y: -5}
}

export const fieldSlice = createSlice({
  name: 'fields',
  initialState,

  reducers: {
    selectMyCell(state, action: PayloadAction<string>) {
      console.log(action.payload, ' My field')
    },

    selectEnemyCell(state, action: PayloadAction<string>) {
      state.fieldEnemy.arr[Number(action.payload[0])][Number(action.payload[1])].isUse = true
    },

    updateFields(state) {
      state.fieldEnemy = initialState.fieldEnemy
    },

    setDelta (state, action) {
      const {x, y} = action.payload
      state.delta.x = x
      state.delta.y = y
    },

    setOverCell (state, action) {
      const {x, y} = action.payload
      state.overCell.x = x
      state.overCell.y = y
    },

    placeShip (state, action) {
      const { x, y } = state.overCell
      const { ship, isCtrlPressed } = action.payload
      const start = isCtrlPressed ? y : x
      for (let i = start; i < start + ship.size; i++) {
        isCtrlPressed
          ? state.fieldMy.arr[i][x].idShip = `${ship.id}${i-start}`
          : state.fieldMy.arr[y][i].idShip = `${ship.id}${i-start}`
      }
    }
  },
})

export const {
  selectMyCell, selectEnemyCell, updateFields, setDelta, setOverCell, placeShip
} = fieldSlice.actions
export default fieldSlice.reducer
