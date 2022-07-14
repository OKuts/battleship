import { IShip } from "../../store/types/ship"
import { Ship } from ".."
import {FC, memo} from "react";
import {useAppSelector} from "../../hooks/useAppDispatch";
export const Port: FC = memo(() => {
    const {flot} = useAppSelector(state => state.flot)
    return <>
        {flot.map((ship: IShip, i) =>
            <Ship key = {i} ship = {ship}></Ship>
            )}
    </>
})
