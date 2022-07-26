import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {initEnemyField} from "../utils/initEnemyField";

const initialState = {
  enemyField: initEnemyField()
}

export const seaEnemySlice = createSlice({
  name: 'fields',
  initialState,

  reducers: {
    updateSeaEnemy(state) {
      state.enemyField = initEnemyField()
    },

    nextStep(state, action: PayloadAction<string>) {
      state.enemyField[action.payload] = true
    }
  },
})

export const {
  updateSeaEnemy, nextStep
} = seaEnemySlice.actions
export default seaEnemySlice.reducer
