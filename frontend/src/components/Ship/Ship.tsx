import {FC, useEffect} from "react"
import st from './Ship.module.scss'

import {ShipPart} from "..";
import {ShipClass} from "../../classes/ShipClass";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import {
  setDxDy, setMouseLeftPress, setSelectedShip
} from "../../store";

type ShipTypeProps = {
  ship: ShipClass
}

export const Ship: FC<ShipTypeProps> = ({ship}) => {
  const dispatch = useAppDispatch()
  const {beginX, beginY} = useAppSelector(state => state.field)

  const handlerMouseDown = (x: number, y: number, ship: ShipClass) => {
    dispatch(setMouseLeftPress(true))
    dispatch(setSelectedShip(ship.i))
    if (beginX && beginY && ship.x && ship.y) {
      dispatch(setDxDy({x: x - beginX - ship.x, y: y - beginY - ship.y}))
    }
  }

  return <div
    onMouseDown={(e) => handlerMouseDown(e.clientX, e.clientY, ship)}
    className={ship.direction ? st.ship : st.shipV}
    id={`${ship.id}`}
    style={{top: ship.y || 0, left: ship.x || 0 }}
  >
    {Array(ship.size).fill('').map((_, i) =>
      <ShipPart key={i} id={i}/>)}
  </div>
}
