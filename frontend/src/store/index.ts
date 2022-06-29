import {configureStore} from "@reduxjs/toolkit";
import fieldReducer from './fieldSlice'
import flotReducer from './shipSlice'

export const store =  configureStore ({
    reducer: {
        field: fieldReducer,
        flot: flotReducer
    },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
