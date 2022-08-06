import {FC} from "react";
import {useAppSelector} from "../../hooks/useAppDispatch";
import {ShipClass} from "../../classes/ShipClass";
import {Ship} from ".."

export const Port: FC = () => {
  const {flot} = useAppSelector(state => state.flot)

  return <>
    {flot.map((ship: ShipClass) => <Ship key={ship.id} ship={ship} field = {0} />)}
  </>
}
