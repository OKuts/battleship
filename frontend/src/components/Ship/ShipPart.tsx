import {FC, memo} from "react";
import st from "./Ship.module.scss";

type ShipPartProps = {
  id: number
  wound: boolean
}

export const ShipPart: FC<ShipPartProps> = memo(({id, wound}) =>
  <div
    id={`${id}`}
    className={!wound ? st.shipPart : st.shipWound}
  />
)
