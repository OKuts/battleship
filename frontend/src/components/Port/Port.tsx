import { useAppSelector } from "../../hooks/useAppDispatch"
import { IShip, Place } from "../../store/types/ship"
import { Ship } from ".."
import st from './Port.module.scss'

export const Port = () => {
    const {flot} = useAppSelector(state => state.flot)

    return <div className={st.port}>
        {flot.map((ship: IShip, i) =>
            ship.place === Place.PORT && <Ship key = {i} ship = {ship}></Ship>
            )}
    </div>
}
