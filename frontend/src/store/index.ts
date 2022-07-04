import {configureStore} from "@reduxjs/toolkit";
import fieldReducer from './fieldSlice'
import flotReducer from './shipSlice'
import mouseReducer from './mouseSlice'

export const store =  configureStore ({
    reducer: {
        field: fieldReducer,
        flot: flotReducer,
        mouse: mouseReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
