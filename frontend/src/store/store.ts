import {configureStore} from "@reduxjs/toolkit";
import fieldReducer from './fieldSlice'
import flotReducer from './shipSlice'
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
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
