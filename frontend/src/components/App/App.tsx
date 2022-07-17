import {FC, MouseEventHandler} from 'react'
import st from './App.module.scss'

import {BattleField} from '..'
import {Button} from '../../elements/Button/Button';
import {
  changePositionShip, setIsMouseLeftPress, setSelectedShip, updateFlot
} from '../../store';
import {SeaMy} from "../Sea/SeaMy";
import {SeaEnemy} from "../Sea/SeaEnemy";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatch";

export const App: FC = () => {
  const dispatch = useAppDispatch()
  const {selectedShip} = useAppSelector(state => state.flot)
  const {beginX, beginY} = useAppSelector(state => state.field)
  const {dx, dy, isMouseLeftPress} = useAppSelector(state => state.mouse)

  // const handlerMouseUp: MouseEventHandler<HTMLDivElement> = (e) => {
  //       console.log('onMouseUp');
  //   if (selectedShip !== null) {
  //     console.log(beginX, dx);
      
  //     if (beginX && beginY && dx && dy) {
  //       dispatch(changePositionShip(
  //         {
  //           x: e.clientX - beginX - dx,
  //           y: e.clientY - beginY - dy
  //         }))
  //     }
  //   }
  //   dispatch(setIsMouseLeftPress(false))
  //   dispatch(setSelectedShip(null))
  // }

  return (
    <div
      className={st.app}>
      <div className={st.field}>
        <BattleField port>
          <SeaMy/>
        </BattleField>
      </div>
      <div className={st.buttons}>
        <Button text='Button1'/>
        <Button text='Button2'/>
        <Button text='Reset' func={[updateFlot]}/>
      </div>
      <div className={st.field}>
        <BattleField>
          <SeaEnemy/>
        </BattleField>
      </div>
    </div>
  )
}
