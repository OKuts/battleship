import st from './BattleField.module.scss'
import {FC} from 'react'
import {Line} from "./Line";
import {Sea} from "../Sea/Sea";

type BattleFieldProps = {
  enemy: boolean
}

export const BattleField: FC<BattleFieldProps> = ({enemy}) => {

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
          <Sea enemy = {enemy}/>
        </div>
      </div>
    </div>
  )
}
