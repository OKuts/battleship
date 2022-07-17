import {FC} from "react"
import st from './Ship.module.scss'

import {ShipPart} from "..";
import {ShipClass} from "../../classes/ShipClass";

type ShipTypeProps = {
  ship: ShipClass
  handlerMouseDown: (x: number, y: number, ship: ShipClass)=> void
}

export const Ship: FC<ShipTypeProps> = ({ship, handlerMouseDown}) => {
  return <div
    onMouseDown={(e) => handlerMouseDown(e.clientX, e.clientY, ship)}
    className={st.ship}
    id={`${ship.id}`}
    style={{top: ship.y || 0, left: ship.x || 0}}
  >
    {Array(ship.size).fill('').map((_, i) =>
      <ShipPart key={i} id={i}/>)}
  </div>
}
