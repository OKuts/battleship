import {FC} from 'react'
import {CellMy} from "./CellMy";
import {CellEnemy} from "./CellEnemy";
import st from './Sea.module.scss'
import { useAppSelector } from '../../hooks/useAppDispatch';

type SeaProps = {
  isEnemy: boolean
}

export const Sea: FC<SeaProps> = ({isEnemy}) => {
  const {fieldMy, fieldEnemy} = useAppSelector(state => state.field)
  const field = isEnemy ? fieldEnemy : fieldMy

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
