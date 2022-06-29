import st from './BattleField.module.scss'
import {FC} from 'react'
import {Line} from "./Line";
import {Sea} from "../Sea/Sea";
import {IFieldType} from "../../store/types/field";
import { Port } from '../Port/Port';

type BattleFieldProps = {
  field: IFieldType
}

export const BattleField: FC<BattleFieldProps> = ({field}) => {
  
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
          <Sea field={field}/>
          {!field.isEnemy && <Port />}
        </div>
      </div>
    </div>
  )
}
