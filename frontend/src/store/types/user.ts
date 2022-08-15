import {Socket} from "socket.io-client";

export interface IUser {
  name: string
  id: string
}

export interface IUserState {
  user: IUser | null
  socket: Socket
}
