import {FC, MouseEvent, useEffect, useRef, memo} from 'react'
import {useDispatch} from "react-redux";

import st from './BattleField.module.scss'

import {Sea, Port, Line} from ".."

import {useAppSelector} from "../../hooks/useAppDispatch"
import {changePositionSelectedShip, setCoordinates} from "../../store"
import {isCoordinateIn, getCoordinates} from "../../utils"

export const BattleField: FC = memo(() => {
  const dispatch = useDispatch()
  const ref = useRef<HTMLDivElement>(null)
  const {selectedShip, flot} = useAppSelector(state => state.flot)
  const  { delta, overCell, client } = useAppSelector(state => state.field)
  const { isCtrlPressed } = useAppSelector(state => state.ctrl)

  const handlerMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    dispatch(setCoordinates({name: 'client', x: e.clientX, y: e.clientY}))
  }

  useEffect(()=>{
    if (ref.current) {
      const field = ref.current.getBoundingClientRect()
      dispatch(setCoordinates({name: 'delta', x: field.x, y: field.y}))
    }
  }, [ref.current])

  useEffect(()=>{
    if (selectedShip !== null && client.x !== null && client.y !== null) {
      // @ts-ignore
      const {x, y, cellX, cellY} = getCoordinates(client, delta)
      if (overCell.x !== cellX || overCell.y !== cellY) {
        const isXYIn = isCoordinateIn(cellY, cellX, isCtrlPressed, flot[selectedShip].size)
        dispatch(setCoordinates(isXYIn
          ? {name: 'overCell', x: cellX, y: cellY}
          : {name: 'overCell', x: null, y: null}))
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
          <Port flot = {flot}/>
        </div>
      </div>
    </div>
  )
})
