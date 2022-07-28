import {FC, memo} from "react";
import st from "./Ship.module.scss";

type ShipPartProps = {
  id: number
}

export const ShipPart: FC<ShipPartProps> = memo(({id}) =>
  <div id={`${id}`} className={st.shipPart} />
)
