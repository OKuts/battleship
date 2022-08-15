import {useEffect, useState} from "react";
import {IUser} from "../store/types/user";

export const useGetUser = () => {
  const [value, setValue] = useState<IUser | null>(null)

  useEffect(() => {
    const user = localStorage.getItem('user')
    if (user) {
      setValue(JSON.parse(user))
    }
  }, [])

  return value
}
