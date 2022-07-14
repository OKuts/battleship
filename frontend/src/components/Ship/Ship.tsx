import {FC} from "react"
import {IShip} from "../../store/types/ship"
import st from './Ship.module.scss'

import {ShipPart} from "..";

type ShipTypeProps = {
  ship: IShip
}

export const Ship: FC<ShipTypeProps> = ({ship}) => {
  return <div
    className={st.ship}
    id={`${ship.id}`}
    style={{top: ship.y, left: ship.x}}
  >
    {Array(ship.size).fill('').map((_, i) =>
      <ShipPart key={i} id={i}/>)}
  </div>
}
