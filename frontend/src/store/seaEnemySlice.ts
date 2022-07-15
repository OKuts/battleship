import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initEnemyField} from "../utils/initEnemyField";

const initialState = {
  enemyField: initEnemyField()
}

export const seaEnemySlice = createSlice({
  name: 'fields',
  initialState,

  reducers: {
    initSeaEnemy() {
    },
  },
})

export const {
  initSeaEnemy
} = seaEnemySlice.actions
export default seaEnemySlice.reducer
