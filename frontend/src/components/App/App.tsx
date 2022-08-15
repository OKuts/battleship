import {FC, useEffect} from 'react'
import st from './App.module.scss'

import {BattleField} from '..'
import {Button} from '../../elements/Button/Button';
import {
  changePositionShip, initFlotAuto, setConnection, setIsCtrlPressed, setMessageReady,
  setMouseLeftPress, updateFlot, updateSeaEnemy,
} from '../../store';
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatch";
import {Modal} from "../Modal/Modal";
import {Message} from "../Message/Message";

import {useGetUser} from "../../hooks/useGetUser";
import {RegisterForm} from "../RegisterForm/RegisterForm";

export const App: FC = () => {
  const dispatch = useAppDispatch()
  const userData = useGetUser()

  const {user} = useAppSelector(state => state.user)
  const { begin, dx, dy, isMouseLeftPress, gameText} = useAppSelector(state => state.flot)

  const handlerMouseMove = (x: number, y: number) => {
    if (begin.length && dx && dy && isMouseLeftPress) {
      dispatch(changePositionShip({x: x - begin[0].x - dx, y: y - begin[0].y - dy}))
    }
  }
  const handlerCtrlUp =  (e: KeyboardEvent) => {
    if (e.key === 'Control') {
      dispatch(setIsCtrlPressed(true))
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handlerCtrlUp)
    return
  }, [])

  useEffect(() => {
    dispatch(setConnection())
    dispatch(initFlotAuto())
    dispatch(updateFlot())
  }, [])

  return (
    <div
      onMouseMove={(e) => handlerMouseMove(e.clientX, e.clientY)}
      onMouseUp={() => dispatch(setMouseLeftPress(false))}
      className={isMouseLeftPress ? st.mouseOff : st.app}>
      <div className={st.field}>
        <BattleField isMy/>
      </div>
      <div className={st.buttons}>
        <Button text='Auto' func={[initFlotAuto, setMessageReady]}/>
        <Button text='Reset' func={[updateSeaEnemy, initFlotAuto, updateFlot]}/>
      </div>
      <div className={st.field}>
        <BattleField/>
      </div>
      {(!userData && !user) && <RegisterForm/>}
      <Modal children={<Message text={gameText}/>}/>
     </div>
  )
}
