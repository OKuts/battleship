import {createSlice} from '@reduxjs/toolkit'
import {io} from 'socket.io-client'
import {IUserState} from './types/user'

const initialState: IUserState = {
  user: null,
  socket: io(),
}

export const userSlice = createSlice({
  name: 'user',
  initialState,

  reducers: {

    setConnection(state) {
      state.socket.on('data', (data: string) => {
        console.log(data)
      })

      state.socket.on('back', (data: string) => {
        console.log(data)
      })
    },

    setUser(state, action) {
      state.user = {name: action.payload, id: state.socket.id}
      localStorage.setItem('user', JSON.stringify(state.user))

      state.socket.emit('hello', state.user);
    }
  },
})

export const {
  setUser, setConnection
} = userSlice.actions
export default userSlice.reducer
