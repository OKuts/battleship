import st from "./Ship.module.scss";
import {FC, MouseEvent} from "react";

type ShipPartProps = {
  id: number
}

export const ShipPart: FC<ShipPartProps> = ({id}) => {

  // const handlerClick = (e: MouseEvent<HTMLDivElement>) => {
  //   console.log('rem', e.currentTarget)
  //   console.log('part', e.clientX)
  // }

  return <div
    id={`${id}`}
    className={st.shipPart}
    // onClick={handlerClick}
  >

  </div>
}
