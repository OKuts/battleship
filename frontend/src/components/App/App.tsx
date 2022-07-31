import {FC, useEffect} from 'react'
import st from './App.module.scss'

import {BattleField} from '..'
import {Button} from '../../elements/Button/Button';
import {
  changePositionShip, initFlotAuto, setIsCtrlPressed, setMessageReady,
  setMouseLeftPress, updateFlot, updateSeaEnemy,
} from '../../store';
import {SeaMy} from "../Sea/SeaMy";
import {SeaEnemy} from "../Sea/SeaEnemy";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatch";
import {Modal} from "../Modal/Modal";
import {Message} from "../Message/Message";


export const App: FC = () => {
  const dispatch = useAppDispatch()
  const {
    beginX, beginY, dx, dy, isMouseLeftPress, gameText
  } = useAppSelector(state => state.flot)

  const handlerMouseMove = (x: number, y: number) => {
    if (beginX && beginY && dx && dy && isMouseLeftPress) {
      dispatch(changePositionShip({x: x - beginX - dx, y: y - beginY - dy}))
    }
  }
  const handlerCtrlUp = function (e: KeyboardEvent) {
    if (e.key === 'Control') {
      dispatch(setIsCtrlPressed(true))
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handlerCtrlUp)
    return
  }, [])

  return (
    <div
      onMouseMove={(e) => handlerMouseMove(e.clientX, e.clientY)}
      onMouseUp={() => dispatch(setMouseLeftPress(false))}
      className={isMouseLeftPress ? st.mouseOff : st.app}>
      <div className={st.field}>
        <BattleField port children={<SeaMy/>} />
      </div>
      <div className={st.buttons}>
        <Button text='Auto' func={[initFlotAuto, setMessageReady]}/>
        <Button text='Reset' func={[updateFlot, updateSeaEnemy]}/>
      </div>
      <div className={st.field}>
        <BattleField children={<SeaEnemy/>} />
      </div>
      <Modal children={<Message text={gameText}/>}/>
     </div>
  )
}
