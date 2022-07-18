import {FC, useEffect} from 'react'
import st from './App.module.scss'

import {BattleField} from '..'
import {Button} from '../../elements/Button/Button';
import {setIsCtrlPressed, updateFlot} from '../../store';
import {SeaMy} from "../Sea/SeaMy";
import {SeaEnemy} from "../Sea/SeaEnemy";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatch";

export const App: FC = () => {
  const dispatch = useAppDispatch()

  const handlerCtrlUp = (e: KeyboardEvent) => {
    console.log(e)
    if (e.key === 'Control') dispatch(setIsCtrlPressed(true))
  }

  useEffect(() => {
    window.addEventListener('keyup', handlerCtrlUp)
    return
  }, [])

  return (
    <div
      className={st.app}>
      <div className={st.field}>
        <BattleField port children={<SeaMy/>} />
      </div>
      <div className={st.buttons}>
        <Button text='Button1'/>
        <Button text='Button2'/>
        <Button text='Reset' func={[updateFlot]}/>
      </div>
      <div className={st.field}>
        <BattleField children={<SeaEnemy/>} />
      </div>
    </div>
  )
}
