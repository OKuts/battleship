import {FC} from "react"
import st from './Ship.module.scss'

import {ShipPart} from "..";
import {ShipClass} from "../../classes/ShipClass";
import { useAppDispatch, useAppSelector } from "../../hooks/useAppDispatch";
import { changePositionShip, setDxDy, setSelectedShip } from "../../store";

type ShipTypeProps = {
  ship: ShipClass
}

export const Ship: FC<ShipTypeProps> = ({ship}) => {
  const dispatch = useAppDispatch()
  const {selectedShip} = useAppSelector(state => state.flot)
  const {beginX, beginY} = useAppSelector(state => state.field)
  const {dx, dy} = useAppSelector(state => state.mouse)

  const handlerDragStart = (e: DragEvent, ship: ShipClass) => {
    if (beginX && beginY && ship.x && ship.y) {
      dispatch(setDxDy({x: e.clientX - beginX - ship.x, y: e.clientY - beginY - ship.y}))
    }
    dispatch(setSelectedShip(ship.i))
  }

  const handlerDragEnd = (x: number, y: number) => {
    if (beginX && beginY && dx && dy) {  
      dispatch(changePositionShip({x: x - beginX - dx, y: y - beginY - dy}))
    }
    dispatch(setSelectedShip(null))
  }

  return <div

    onDragStart ={(e) => handlerDragStart(e, ship)}
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
