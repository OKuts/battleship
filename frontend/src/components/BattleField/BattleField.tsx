import {FC, MouseEvent, useEffect, useRef} from 'react'
import st from './BattleField.module.scss'
import {Line} from "./Line";
import {Sea} from "../Sea/Sea";
import { Port } from '../Port/Port';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/useAppDispatch";
import {changePositionSelectedShip} from "../../store/shipSlice";
import {setOverCell, setDelta} from "../../store/fieldSlice";
import {isCoordinateIn} from "../../utils/isCoordinateIn";

export const BattleField: FC = () => {
  const dispatch = useDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const {selectedShip, flot} = useAppSelector(state => state.flot)
  const  { delta } = useAppSelector(state => state.field)
  const { isCtrlPressed } = useAppSelector(state => state.ctrl)

  const handlerMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (selectedShip !== null) {
      const x = e.clientX - delta.x - 15
      const y = e.clientY - delta.y - 15
      const cellX = Math.round(x/30)
      const cellY = Math.round(y/30)
      const isXYIn = isCoordinateIn(cellY, cellX, isCtrlPressed, flot[selectedShip].size)
      dispatch(setOverCell(isXYIn ? {x: cellX, y: cellY} : {x: null, y: null}))
      dispatch(changePositionSelectedShip({x, y}))
    }
  }

  useEffect(()=>{
    if (ref.current) {
      const field = ref.current.getBoundingClientRect()
      dispatch(setDelta({x: field.x, y: field.y}))
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
          className={st.myField }>
          <Sea isEnemy={false}/>
          <Port />
        </div>
      </div>
    </div>
  )
}
