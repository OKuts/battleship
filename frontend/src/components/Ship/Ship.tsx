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
  const {dX, dY} = useAppSelector(state => state.mouse)

  const handlerKeyDown = (e: MouseEvent<HTMLDivElement>) => {

    dispatch(setCurrentShip(Number(e.currentTarget.id)))
    const x = e.target.id * 30 - e.nativeEvent.offsetX
    // const x = e.clientX

    const y = e.clientY - e.nativeEvent.offsetY
    console.log('ship', e.clientY, e.clientX)
    console.log('nativeEvent', e.nativeEvent.offsetY, e.nativeEvent.offsetX)
    console.log('part', e.target.id)
    console.log('ship', e.currentTarget.id)
    console.log('xy', x, y)
    dispatch(changePositionSelectedShip({x, y}))
  }

  return <div
    onMouseDown={handlerKeyDown}
    id={`${ship.id}`}
    style={{top: ship.y, left: ship.x}}
    className={selectedShip === ship.id ? st.moveShip : st.ship}
  >
    {Array(ship.size).fill('').map((_, i) =>
      <ShipPart key={i} id={i}/>)}
  </div>
}
