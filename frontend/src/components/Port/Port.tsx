import { IShip } from "../../store/types/ship"
import { Ship } from ".."
import {FC, memo} from "react";
import {useAppSelector} from "../../hooks/useAppDispatch";
export const Port: FC = memo(() => {
    const {flot} = useAppSelector(state => state.flot)

    const handlerMouseDown = (e: MouseEvent) => {
        console.log(e);
    }

    return <>
        {flot.map((ship: IShip, i) =>
            <Ship 
            handlerMouseDown={handlerMouseDown}
            key = {i} 
            ship = {ship}></Ship>
            )}
    </>
})
