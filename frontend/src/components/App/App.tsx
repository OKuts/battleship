import st from './App.module.scss'
import {FC, useEffect} from 'react'
import {BattleField, BattleFieldEnemy} from '..'
import {Button} from '../../elements/Button/Button';
import {updateFields, setIsCtrlPressed, setIsMouseLeftPress, updateFlot} from '../../store';
import {useAppDispatch} from "../../hooks/useAppDispatch";

export const App: FC = () => {
  const dispatch = useAppDispatch()

  const handlerCtrlDown = (e: KeyboardEvent) => {
    if (e.ctrlKey) dispatch(setIsCtrlPressed(true))
  }

  const handlerCtrlUp = (e: KeyboardEvent) => {
    if (!e.ctrlKey) dispatch(setIsCtrlPressed(false))
  }

  const handlerOnMouseUp = () => { dispatch(setIsMouseLeftPress(false))}

  useEffect(() => {
    window.addEventListener('keydown', handlerCtrlDown)
    window.addEventListener('keyup', handlerCtrlUp)
    return
  }, [])

  return (
    <div
      onMouseUp={handlerOnMouseUp}
      className={st.app}>
      <div className={st.field}>
        <BattleField/>
      </div>
      <div className={st.buttons}>
        <Button text='Button1'/>
        <Button text='Button2'/>
        <Button text='Reset' func={[updateFields, updateFlot]}/>
      </div>
      <div className={st.field}>
        <BattleFieldEnemy/>
      </div>
    </div>
  )
}
