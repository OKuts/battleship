import { useAppSelector } from "../../hooks/useAppDispatch"
import { IShip, Place } from "../../store/types/ship"
import { Ship } from ".."
import st from './Port.module.scss'
import {FC, memo} from "react";
interface PortProps {
    flot: IShip[]
}

export const Port: FC<PortProps> = memo(({flot}) => {
    console.log('Port')

    return <div className={st.port}>
        {flot.map((ship: IShip, i) =>
            ship.place === Place.PORT && <Ship key = {i} ship = {ship}></Ship>
            )}
    </div>
})
