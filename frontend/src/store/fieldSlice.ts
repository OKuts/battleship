import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFieldState} from "./types/field";
import {initField} from "../utils/initField";

const initialState: IFieldState = {
  fieldMy: initField(false),
  fieldEnemy: initField(true),
  start: {x: 0, y: 0}
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

    setStart (state, action) {
      state.start.x = action.payload.x
      state.start.y = action.payload.y
    }
  },
})

export const { selectMyCell, selectEnemyCell, updateFields, setStart } = fieldSlice.actions
export default fieldSlice.reducer
