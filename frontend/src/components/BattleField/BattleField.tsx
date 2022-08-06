import { FC } from 'react'
import { Port } from '../Port/Port'
import st from './BattleField.module.scss'
import { Line } from './Line'
import {Sea} from "../Sea/Sea";

interface IBattleProps {
  isMy?: boolean
}

export const BattleField: FC<IBattleProps> = ({ isMy = false}) => {
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
      <div className={st.field }>
        <Sea isMy = {isMy}/>
        {isMy && <Port/>}
      </div>
    </div>
  </div>
  )
}
