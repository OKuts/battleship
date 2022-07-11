import {FC} from "react";
import st from "./BattleField.module.scss";

interface LineProps {
  start: number
}

export const Line:FC <LineProps> = ({start}) => {
  console.log('line')
  return (
    <>
      {[...Array(10).keys()].map(n =>
        <div key={n} className={st.cell}>
          {String.fromCharCode(n + start)}
        </div>
      )}
    </>
  )
}
