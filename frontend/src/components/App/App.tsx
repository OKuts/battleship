import st from './App.module.scss'
import {FC, useEffect, useState} from 'react'
import { BattleField } from '../BattleField/BattleField'
import { Button } from '../../elements/Button/Button';
import { updateFields } from '../../store/fieldSlice';
import {BattleFieldEnemy} from "../BattleField/BattleFieldEnemy";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatch";
import {setIsCtrlPressed} from "../../store/ctrlSlice";
import {useCtrlPressed} from "../../hooks/useCtrlPressed";

export const App: FC = () => {
  const dispatch = useAppDispatch()

  const downHandler = (e: KeyboardEvent) => {
    dispatch(setIsCtrlPressed(e.ctrlKey ? true : false))
  }

  const upHandler = () => {
    dispatch(setIsCtrlPressed(false))
  }

  useEffect(() => {
    window.addEventListener('keydown', downHandler)
    window.addEventListener('keyup', upHandler)
    return
  }, [])

  return (
    <div className={st.app}>
      <div className={st.field}>
        <BattleField/>
      </div>
      <div className={st.buttons}>
        <Button text='Button1' />
        <Button text='Button2' />
        <Button text='Reset' func = {updateFields}/>
      </div>
      <div className={st.field}>
        <BattleFieldEnemy />
      </div>
    </div>
  )
}
