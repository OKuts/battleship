import {configureStore} from "@reduxjs/toolkit";
import flotReducer from './flotSlice'
import enemyReducer from './seaEnemySlice'

export const store =  configureStore ({
    reducer: {
        flot: flotReducer,
        enemy: enemyReducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
          serializableCheck: false,
      }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
