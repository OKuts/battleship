import st from "./Ship.module.scss";
import {FC, memo} from "react";

type ShipPartProps = {
  id: number
}

export const ShipPart: FC<ShipPartProps> = memo(({id}) =>
  <div id={`${id}`} className={st.shipPart} />
)
