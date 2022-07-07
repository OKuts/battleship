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
      state.delta.x = action.payload.x
      state.delta.y = action.payload.y
    },

    setOverCell (state, action) {
      state.overCell.x = action.payload.x
      state.overCell.y = action.payload.y
    },
  },
})

export const {
  selectMyCell, selectEnemyCell, updateFields, setDelta, setOverCell
} = fieldSlice.actions
export default fieldSlice.reducer
