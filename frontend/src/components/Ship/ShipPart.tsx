import st from "./Ship.module.scss";
import {FC, memo} from "react";

type ShipPartProps = {
  id: number
}

export const ShipPart: FC<ShipPartProps> = memo(({id}) => {

  return <div
    id={`${id}`}
    className={st.shipPart}
  >
  </div>
})
