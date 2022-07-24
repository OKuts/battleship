import {FC, useEffect} from 'react'
import st from './App.module.scss'

import {BattleField} from '..'
import {Button} from '../../elements/Button/Button';
import {
  changeDirection, changePositionShip, setIsCtrlPressed,
  setMouseLeftPress, updateFlot,
} from '../../store';
import {SeaMy} from "../Sea/SeaMy";
import {SeaEnemy} from "../Sea/SeaEnemy";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatch";

export const App: FC = () => {
  const dispatch = useAppDispatch()
  const {beginX, beginY} = useAppSelector(state => state.field)
  const {dx, dy, isMouseLeftPress} = useAppSelector(state => state.mouse)
  const {isCtrlPressed, flot, selectedShip} = useAppSelector(state => state.flot)

  const handlerMouseMove = (x: number, y: number) => {
    if (beginX && beginY && dx && dy && isMouseLeftPress) {
      dispatch(changePositionShip({x: x - beginX - dx, y: y - beginY - dy}))
    }
  }

  const handlerCtrlUp = function (e: KeyboardEvent) {
    if (e.key === 'Control') {
      dispatch(setIsCtrlPressed(true))
      // if (selectedShip !== null && dx !== null) {
      //   dispatch(changePositionShip({
      //     x: flot[selectedShip].x + dx,
      //     y: flot[selectedShip].y
      //   }))
      // }
    }
  }

  useEffect(() => {
    window.addEventListener('keyup', handlerCtrlUp)
    return
  }, [])

  useEffect(() => {
    dispatch(changeDirection())
  }, [isCtrlPressed])

  return (
    <div
      onMouseMove={(e) => handlerMouseMove(e.clientX, e.clientY)}
      onMouseUp={() => dispatch(setMouseLeftPress(false))}
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
