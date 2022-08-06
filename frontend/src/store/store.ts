import {configureStore} from "@reduxjs/toolkit";
import flotReducer from './flotSlice'

export const store =  configureStore ({
    reducer: {
        flot: flotReducer,
    },
    middleware: getDefaultMiddleware =>
      getDefaultMiddleware({
          serializableCheck: false,
      }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
