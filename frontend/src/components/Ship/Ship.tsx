import {FC, MouseEvent} from "react"
import {IShip} from "../../store/types/ship"
import st from './Ship.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatch";
import {ShipPart} from "./ShipPart";
import {changePositionSelectedShip, setCurrentShip} from "../../store/shipSlice";

type ShipType = {
  ship: IShip
}

export const Ship: FC<ShipType> = ({ship}) => {
  const dispatch = useAppDispatch()
  const {selectedShip} = useAppSelector(state => state.flot)
  const {start} = useAppSelector(state => state.field)

  const handlerMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    dispatch(setCurrentShip(Number(e.currentTarget.id)))
    const x = e.pageX - start.x - 15
    const y = e.pageY - start.y - 15
    dispatch(changePositionSelectedShip({x, y}))
  }

  return <div
    onMouseDown={handlerMouseDown}
    id={`${ship.id}`}
    style={{top: ship.y, left: ship.x}}
    className={selectedShip === ship.id ? st.moveShip : st.ship}
  >
    {Array(ship.size).fill('').map((_, i) =>
      <ShipPart key={i} id={i}/>)}
  </div>
}
