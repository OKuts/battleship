import { FC } from "react"
import { IShip } from "../../store/types/ship"
import st from './Ship.module.scss'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {changeIsMove} from "../../store/shipSlice";

type ShipType = {
    ship: IShip
}

const ShipPart = () => (<div className={st.shipPart}></div>)

export const Ship: FC<ShipType> = ({ship}) => {
    const dispatch = useAppDispatch()

    return <div
      onMouseDown={()=> dispatch(changeIsMove(ship.id))}
      className={ship.isMove ? st.moveShip : st.ship}>
        {Array(ship.size).fill('').map((_, i) => <ShipPart key={i}/>)}
    </div>
}
