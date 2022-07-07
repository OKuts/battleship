import {MouseEvent, useEffect, useRef, useState} from 'react'
import st from './BattleField.module.scss'
import {FC} from 'react'
import {Line} from "./Line";
import {Sea} from "../Sea/Sea";
import { Port } from '../Port/Port';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/useAppDispatch";
import {changePositionSelectedShip, removeCurrentShip} from "../../store/shipSlice";
import {setOverCell, setStart} from "../../store/fieldSlice";

export const BattleField: FC = () => {
  const dispatch = useDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const {selectedShip} = useAppSelector(state => state.flot)
  const  { fieldMy, start } = useAppSelector(state => state.field)

  const handlerMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (selectedShip !== null) {
      const x = e.clientX - start.x - 15
      const y = e.clientY - start.y - 15
      const cellX = Math.round(x/30)
      const cellY = Math.round(y/30)
      dispatch(setOverCell({x: cellX, y: cellY}))
      dispatch(changePositionSelectedShip({x, y}))
    }
  }

  const handlerMouseUp = () => {
    dispatch(removeCurrentShip())
  }

  useEffect(()=>{
    if (ref.current) {
      const field = ref.current.getBoundingClientRect()
      dispatch(setStart({x: field.x, y: field.y}))
    }
  }, [ref.current])

  return (
    <div>
      <div className={st.numberLine}>
        <div className={st.cell}></div>
        <Line start={48}/>
      </div>
      <div className={st.letterField}>
        <div>
          <Line start={65}/>
        </div>
        <div
          ref={ref}
          onMouseMove={handlerMouseMove}
          onMouseDown={handlerMouseMove}
          onMouseUp={handlerMouseUp}
          className={st.myField }>
          <Sea field={fieldMy} isEnemy={false}/>
          <Port />
        </div>
      </div>
    </div>
  )
}
