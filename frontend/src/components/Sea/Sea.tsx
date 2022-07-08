import {FC} from 'react'
import {IFieldType} from "../../store/types/field";
import {CellMy} from "./CellMy";
import {CellEnemy} from "./CellEnemy";
import st from './Sea.module.scss'

type SeaProps = {
  field: IFieldType
  isEnemy: boolean
}

export const Sea: FC<SeaProps> = ({field, isEnemy}) => {

  return <table
    className={st.table}>
    <tbody>
    {
      field.arr.map((line, y) => {
        return <tr key={y}>
          {line.map(cell =>
            isEnemy
              ? <CellEnemy key={cell.idCell} cell={cell}/>
              : <CellMy key={cell.idCell} cell={cell}/>
          )}
        </tr>
      })
    }
    </tbody>
  </table>
}
