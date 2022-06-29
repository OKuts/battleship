import { FC } from "react"
import { IShip } from "../../store/types/ship"
import st from './Ship.module.scss'

type ShipType = {
    ship: IShip
}

const ShipPart = () => (<div className={st.shipPart}></div>)

export const Ship: FC<ShipType> = ({ship}) => {
    return <div className={st.ship}>
        {Array(ship.size).fill('').map((_, i) => <ShipPart key={i}/>)}
    </div>
}