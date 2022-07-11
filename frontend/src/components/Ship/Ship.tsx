import {FC, MouseEvent, useEffect} from "react"
import {IShip} from "../../store/types/ship"
import st from './Ship.module.scss'
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatch";
import {ShipPart} from "./ShipPart";
import {backSelectedShip, changePositionSelectedShip, removeSelectedShip, setSelectedShip} from "../../store/shipSlice";
import {setIsMouseLeftPress} from "../../store/mouseSlice";
import {placeShip, setOverCell} from "../../store/fieldSlice";
import {getArrId, isCoordinateIn, isTryPlace} from "../../utils";

type ShipType = {
  ship: IShip
}

export const Ship: FC<ShipType> = ({ship}) => {
  const dispatch = useAppDispatch()
  const {selectedShip, flot} = useAppSelector(state => state.flot)
  const {delta, overCell, fieldMy, client} = useAppSelector(state => state.field)
  const {isCtrlPressed} = useAppSelector(state => state.ctrl)
  const {isMouseLeftPress} = useAppSelector(state => state.mouse)

  const handlerMouseDown = (e: MouseEvent<HTMLDivElement>) => {
    dispatch(setIsMouseLeftPress(true))
    dispatch(setSelectedShip(Number(e.currentTarget.id)))
    const x = e.pageX - delta.x - 15
    const y = e.pageY - delta.y - 15
    dispatch(changePositionSelectedShip({x, y}))
  }

  useEffect(() => {
    if (!isMouseLeftPress) {
      let isXYIn = false
      if (overCell.y !== null && overCell.x !== null && selectedShip !== null) {
        isXYIn = isCoordinateIn(overCell.y, overCell.x, isCtrlPressed, flot[selectedShip].size)
      }
      if (isXYIn) {
        if (selectedShip !== null && overCell.x !== null && overCell.y !== null) {
          const shipPlaceArr = getArrId(overCell.x, overCell.y, flot[selectedShip], isCtrlPressed)
          if (isTryPlace(shipPlaceArr, fieldMy)) {
            dispatch(placeShip({ship: flot[selectedShip], isCtrlPressed}))
          } else dispatch(backSelectedShip())
          dispatch(removeSelectedShip())
        }
      } else {
        dispatch(setOverCell({x: null, y: null}))
        dispatch(backSelectedShip())
      }
    }
  }, [isMouseLeftPress])

  useEffect(() => {
    if (overCell.y !== null && overCell.x !== null && selectedShip !== null) {
      const isXYIn = isCoordinateIn(overCell.y, overCell.x, isCtrlPressed, flot[selectedShip].size)
      if (!isXYIn) {
        dispatch(setOverCell({x: null, y: null}))
      }
    } else {
      if (selectedShip !== null){
        // @ts-ignore
        const {cellX, cellY} = getCoordinates(client, delta)
        if (overCell.x !== cellX || overCell.y !== cellY) {
          const isXYIn = isCoordinateIn(cellY, cellX, isCtrlPressed, flot[selectedShip].size)
          dispatch(setOverCell(isXYIn ? {x: cellX, y: cellY} : {x: null, y: null}))
        }
      }
    }
  }, [isCtrlPressed])

  return <div
    onMouseDown={handlerMouseDown}
    id={`${ship.id}`}
    style={{top: ship.y, left: ship.x}}
    className={selectedShip === ship.id ? isCtrlPressed ? st.moveV : st.moveH : st.ship}
  >
    {Array(ship.size).fill('').map((_, i) =>
      <ShipPart key={i} id={i}/>)}
  </div>
}
