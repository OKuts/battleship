import {Ship} from ".."
import {FC, useEffect} from "react";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatch";
import {ShipClass} from "../../classes/ShipClass";
import {setDxDy, setIsMouseLeftPress, setSelectedShip} from "../../store";

export const Port: FC = () => {
  const dispatch = useAppDispatch()
  const {flot, selectedShip} = useAppSelector(state => state.flot)
  const {beginX, beginY} = useAppSelector(state => state.field)

  const handlerMouseDown = (x: number, y: number, ship: ShipClass) => {
    dispatch(setIsMouseLeftPress(true))
    dispatch(setSelectedShip(ship.i))
    if (beginX && beginY && ship.x && ship.y) {
      dispatch(setDxDy({x: x - beginX - ship.x, y: y - beginY - ship.y}))
    }
  }

  useEffect(()=> {
    if (selectedShip !== null) console.log(flot[selectedShip])
  }, [flot])

  console.log('port')
  return <>
    {flot.map((ship: ShipClass) =>
      <Ship
        handlerMouseDown={handlerMouseDown}
        key={ship.id}
        ship={ship}
      />
    )}
  </>
}
