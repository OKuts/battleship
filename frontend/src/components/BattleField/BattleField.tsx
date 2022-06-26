import st from './BattleField.module.scss'
import {FC} from 'react'
import {Line} from "./Line";
import {Field} from "../../models/Field";
import {Sea} from "../Sea/Sea";

interface BattleFieldProps {
  battleField: Field
}

export const BattleField: FC<BattleFieldProps> = ({battleField}) => {

  return (
    <div>
      <div className={st.numberLine}>
        <div className={st.cell}></div>
        <Line start={48}/>
      </div>
      <div className={st.letterField}>
        <div>
          <Line start={65}/>
        </div>
        <div className={st.seaField}>
          <Sea sea={battleField}/>
        </div>
      </div>
    </div>
  )
}
