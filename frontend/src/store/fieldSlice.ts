import {createSlice} from "@reduxjs/toolkit";
import {Cell} from "../models/Cell";

export type FieldType = {
  field: Cell[][]
}

const initialState: FieldType = {
  field: new Array(10).fill(new Array(10).fill(0))
    .map((line, y) => line.map((_: number, x: number) => new Cell(x, y)))
}

export const fieldSlice = createSlice({
  name: 'field',
  initialState,
  reducers: {
    selectCell(state, action) {
      console.log(action.payload)
      // state.field.forEach((line, y) =>
      //   line.forEach((_, x) => {
      //     if (state.field[x][y].id === action.payload) {
      //       state.field[x][y].isUse = true
      //       console.log(x, y)
      //     }
      //   })
      // )},
    }
    // updateField(state, action) {
    //   return state
    // }
  }
})

export const { selectCell } = fieldSlice.actions
export default fieldSlice.reducer
