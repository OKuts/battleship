import {FC, MouseEvent, useEffect, useRef} from 'react'
import st from './BattleField.module.scss'
import {Line} from "./Line";
import {Sea} from "../Sea/Sea";
import { Port } from '../Port/Port';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/useAppDispatch";
import {changePositionSelectedShip, changeShipDirection, removeCurrentShip} from "../../store/shipSlice";
import {setOverCell, setDelta, placeShip} from "../../store/fieldSlice";
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
      if (isCoordinateIn(cellY, cellX, isCtrlPressed, flot[selectedShip].size)) {
        dispatch(setOverCell({x: cellX, y: cellY}))
        dispatch(changePositionSelectedShip({x, y}))
      } else {
        dispatch(setOverCell({x: 0, y: -1}))
        // dispatch(changePositionSelectedShip({x: 0, y: -1}))
      }
    }
  }

  const handlerMouseUp = () => {
    // dispatch(changeShipDirection(isCtrlPressed))
    if (selectedShip !== null) {
      dispatch(placeShip({ship: flot[selectedShip], isCtrlPressed} ))
    }
    dispatch(removeCurrentShip())
    dispatch(setOverCell({x: 0, y: -1}))
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
          onMouseUp={handlerMouseUp}
          className={st.myField }>
          <Sea isEnemy={false}/>
          <Port />
        </div>
      </div>
    </div>
  )
}
