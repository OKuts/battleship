import {createSlice, PayloadAction} from "@reduxjs/toolkit";

export interface ICell {
    x: number
    y: number
    isUse: boolean
    isEmpty: boolean
    id: string
}

export type FieldType = {
  fieldMy: ICell[][],
  fieldEnemy: ICell[][],
}

const initField = () => {
  return new Array(10).fill(new Array(10).fill(0))
  .map((line, y) => line.map((_: number, x: number) => ({
    x,
    y,
    isUse: false,
    isEmpty: true,
    id: `${y}${x}`
  })))
}


const initialState: FieldType = {
  fieldMy: initField(),
  fieldEnemy: initField()   
}

export const fieldSlice = createSlice({
  name: 'fields',
  initialState,
  reducers: {
    selectMyCell(state, action: PayloadAction<string>) {
      state.fieldMy[Number(action.payload[0])][Number(action.payload[1])].isUse = true
    },
    selectEnemyCell(state, action: PayloadAction<string>) {
      state.fieldEnemy[Number(action.payload[0])][Number(action.payload[1])].isUse = true
    },
    // updateField(state, action) {
    //   return state
    // }
  },
})

export const { selectMyCell, selectEnemyCell } = fieldSlice.actions
export default fieldSlice.reducer
