import {FC, useState} from "react"
import st from './RegisterForm.module.scss'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {setUser} from "../../store";

export const RegisterForm: FC = () => {
  const [name, setName] = useState('')
  const dispatch = useAppDispatch()

  const handlerSubmit = () => {
    if (!!name) dispatch(setUser(name))
  }

  const handlerChange = (value: string) => {
    setName(value)
  }

  return (
    <div className={st.form}>
      <div>
        <button onClick={handlerSubmit}>
          Register
        </button>
        <input
          onChange={(e)=> handlerChange(e.target.value)}
          name='name'
          autoFocus
          type='text'
          placeholder={'your name'}/>
      </div>
    </div>

  )
}
