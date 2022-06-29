import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {IFieldState} from "./types/field";
import {initField} from "../utils/initField";

const initialState: IFieldState = {
  fieldMy: initField(false),
  fieldEnemy: initField(true)
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
      console.log('Update')
      state.fieldEnemy = initialState.fieldEnemy
    }
  },
})

export const { selectMyCell, selectEnemyCell, updateFields } = fieldSlice.actions
export default fieldSlice.reducer
