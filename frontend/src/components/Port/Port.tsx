import { Ship } from ".."
import {FC, memo} from "react";
import {useAppSelector} from "../../hooks/useAppDispatch";
import { ShipClass } from "../../classes/ShipClass";
export const Port: FC = memo(() => {
    const {flot} = useAppSelector(state => state.flot)

    const handlerMouseDown = (e: MouseEvent) => {
        console.log(e.clientX, e.clientY);
    }

    return <>
        {flot.map((ship: ShipClass, i) =>
            <Ship 
            handlerMouseDown={handlerMouseDown}
            key = {i} 
            ship = {ship}></Ship>
            )}
    </>
})
