import {configureStore} from "@reduxjs/toolkit";
import fieldReducer from './fieldSlice'

export const store =  configureStore ({
    reducer: {
        field: fieldReducer,
    }
})

export type RootState = ReturnType<typeof store.getState>
export type AddDispatch = typeof store.dispatch
