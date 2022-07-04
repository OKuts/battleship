import {MouseEvent} from 'react'
import st from './BattleField.module.scss'
import {FC} from 'react'
import {Line} from "./Line";
import {Sea} from "../Sea/Sea";
import {IFieldType} from "../../store/types/field";
import { Port } from '../Port/Port';
import {useDispatch} from "react-redux";

type BattleFieldProps = {
  field: IFieldType
}

export const BattleField: FC<BattleFieldProps> = ({field}) => {
  const dispatch = useDispatch()

  const handlerMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (!field.isEnemy) {
      // console.log(e.target.parentElement.id)
      // console.log(e)
      // console.log(e.target.id)
    }
  }

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
        <div
          // onMouseMove={handlerMouseMove}
          onMouseDown={handlerMouseMove}
          className={!field.isEnemy ? st.myField : ''}>
          <Sea field={field}/>
          {!field.isEnemy && <Port />}
        </div>
      </div>
    </div>
  )
}
