import {FC, useEffect, useState} from "react"
import st from './Ship.module.scss'

import {ShipPart} from "..";
import {ShipClass} from "../../classes/ShipClass";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import {changeDirection, changePositionShip, setDxDy, setMouseLeftPress, setSelectedShip} from "../../store";

type ShipTypeProps = {
  ship: ShipClass
}

export const Ship: FC<ShipTypeProps> = ({ship}) => {
  const dispatch = useAppDispatch()
  const {beginX, beginY} = useAppSelector(state => state.field)
  const {dx, dy} = useAppSelector(state => state.mouse)
  const {isCtrlPressed} = useAppSelector(state => state.ctrl)
  const [isMouseDown, setIsMouseDown] = useState(false)

  const handlerMouseDown = (x: number, y: number, ship: ShipClass) => {
    setIsMouseDown(true)
    dispatch(setSelectedShip(ship.i))
    if (beginX && beginY && ship.x && ship.y) {
      dispatch(setDxDy({x: x - beginX - ship.x, y: y - beginY - ship.y}))
    }
  }

  const handlerMouseMove = (x: number, y: number) => {
    if (beginX && beginY && dx && dy && isMouseDown) {
      dispatch(changePositionShip({x: x - beginX - dx, y: y - beginY - dy}))
    }
  }

  useEffect(() => {
    dispatch(changeDirection())
  }, [isCtrlPressed])


  return <div
    onMouseDown={(e) => handlerMouseDown(e.clientX, e.clientY, ship)}
    onMouseMove={(e) => handlerMouseMove(e.clientX, e.clientY)}
    className={ship.direction ? st.ship : st.shipV}
    id={`${ship.id}`}
    style={{top: ship.y || 0, left: ship.x || 0 }}
  >
    {Array(ship.size).fill('').map((_, i) =>
      <ShipPart key={i} id={i}/>)}
  </div>
}
