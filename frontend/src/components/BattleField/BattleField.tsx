import {FC, MouseEvent, useEffect, useRef} from 'react'
import st from './BattleField.module.scss'
import {Line} from "./Line";
import {Sea} from "../Sea/Sea";
import { Port } from '../Port/Port';
import {useDispatch} from "react-redux";
import {useAppSelector} from "../../hooks/useAppDispatch";
import {changePositionSelectedShip} from "../../store/shipSlice";
import {setOverCell, setDelta, setClient} from "../../store/fieldSlice";
import {isCoordinateIn, getCoordinates} from "../../utils";

export const BattleField: FC = () => {
  const dispatch = useDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const {selectedShip, flot} = useAppSelector(state => state.flot)
  const  { delta, overCell, client } = useAppSelector(state => state.field)
  const { isCtrlPressed } = useAppSelector(state => state.ctrl)

  const handlerMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    dispatch(setClient({x: e.clientX, y: e.clientY}))
  }

  useEffect(()=>{
    if (ref.current) {
      const field = ref.current.getBoundingClientRect()
      dispatch(setDelta({x: field.x, y: field.y}))
    }
  }, [ref.current])

  useEffect(()=>{
    if (selectedShip !== null && client.x !== null && client.y !== null) {
      // @ts-ignore
      const {x, y, cellX, cellY} = getCoordinates(client, delta)
      if (overCell.x !== cellX || overCell.y !== cellY) {
        const isXYIn = isCoordinateIn(cellY, cellX, isCtrlPressed, flot[selectedShip].size)
        dispatch(setOverCell(isXYIn ? {x: cellX, y: cellY} : {x: null, y: null}))
      }
      dispatch(changePositionSelectedShip({x, y}))
    }
  }, [client])

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
