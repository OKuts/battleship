import {configureStore} from "@reduxjs/toolkit"
import flotReducer from './flotSlice'
import userReducer from './userSlice'


export const store = configureStore({
  reducer: {
    flot: flotReducer,
    user: userReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
