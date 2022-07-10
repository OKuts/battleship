import {FC, MouseEvent} from "react"
import {IShip} from "../../store/types/ship"
import st from './Ship.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatch";
import {ShipPart} from "./ShipPart";
import {changePositionSelectedShip, setSelectedShip} from "../../store/shipSlice";

type ShipType = {
  ship: IShip
}

export const Ship: FC<ShipType> = ({ship}) => {
  const dispatch = useAppDispatch()
  const {selectedShip} = useAppSelector(state => state.flot)
  const {delta} = useAppSelector(state => state.field)
  const  { isCtrlPressed } = useAppSelector(state => state.ctrl)

  const handlerMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    dispatch(setSelectedShip(Number(e.currentTarget.id)))
    const x = e.pageX - delta.x - 15
    const y = e.pageY - delta.y - 15
    dispatch(changePositionSelectedShip({x, y}))
  }

  return <div
    onMouseDown={handlerMouseDown}
    id={`${ship.id}`}
    style={{top: ship.y, left: ship.x}}
    className={selectedShip === ship.id ? isCtrlPressed ? st.moveV: st.moveH : st.ship}
  >
    {Array(ship.size).fill('').map((_, i) =>
      <ShipPart key={i} id={i}/>)}
  </div>
}
