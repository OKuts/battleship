import {FC} from "react"
import st from './Ship.module.scss'

import {ShipPart} from "..";
import {ShipClass} from "../../classes/ShipClass";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import {changePositionShip, setDxDy, setMouseLeftPress, setSelectedShip} from "../../store";

type ShipTypeProps = {
  ship: ShipClass
}

export const Ship: FC<ShipTypeProps> = ({ship}) => {
  const dispatch = useAppDispatch()
  const {beginX, beginY} = useAppSelector(state => state.field)
  const {dx, dy} = useAppSelector(state => state.mouse)

  const handlerDragStart = (x: number, y: number, ship: ShipClass) => {
    dispatch(setMouseLeftPress(true))
    if (beginX && beginY && ship.x && ship.y) {
      dispatch(setDxDy({x: x - beginX - ship.x, y: y - beginY - ship.y}))
    }
    dispatch(setSelectedShip(ship.i))
  }

  const handlerDragEnd = (x: number, y: number) => {
    if (beginX && beginY && dx && dy) {
      dispatch(changePositionShip({x: x - beginX - dx, y: y - beginY - dy}))
    }
    dispatch(setSelectedShip(null))
    dispatch(setMouseLeftPress(false))
  }

  return <div

    onDragStart ={(e) => handlerDragStart(e.clientX, e.clientY, ship)}
    onDragEnd ={(e) => handlerDragEnd(e.clientX, e.clientY)}
    draggable
    className={st.ship}
    id={`${ship.id}`}
    style={{top: ship.y || 0, left: ship.x || 0}}
  >
    {Array(ship.size).fill('').map((_, i) =>
      <ShipPart key={i} id={i}/>)}
  </div>
}
