import st from "./Ship.module.scss";
import {FC} from "react";

type ShipPartProps = {
  id: number
}

export const ShipPart: FC<ShipPartProps> = ({id}) => {
  return <div
    id={`${id}`}
    className={st.shipPart}
    // onClick={handlerClick}
  >

  </div>
}
