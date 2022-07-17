import {configureStore} from "@reduxjs/toolkit";
import fieldReducer from './fieldSlice'
import flotReducer from './flotSlice'
import mouseReducer from './mouseSlice'
import ctrlReducer from './ctrlSlice'
import enemyReducer from './seaEnemySlice'

export const store =  configureStore ({
    reducer: {
        field: fieldReducer,
        flot: flotReducer,
        mouse: mouseReducer,
        ctrl: ctrlReducer,
        enemy: enemyReducer
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
          serializableCheck: false,
      }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
