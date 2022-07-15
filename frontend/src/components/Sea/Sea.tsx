import {FC} from 'react'
import st from './Sea.module.scss'
import {getArr10x10} from "../../utils/getArr10x10";
import { CellEnemy } from './CellEnemy';
import { CellMy } from './CellMy';

interface SeaEnemyProps {
  isEnemy: boolean
}

export const Sea: FC<SeaEnemyProps> = ({isEnemy}) => {
  return <table className={st.table}>
    <tbody>
    {
      getArr10x10().map((line, y) =>
        <tr key={y}>
          {line.map((_: string, x: number) => 
            isEnemy 
              ? <CellEnemy key = {`${y}${x}`} id={`${y}${x}`}/>
              : <CellMy key = {`${y}${x}`} id={`${y}${x}`} />
          )}
        </tr>)
    }
    </tbody>
  </table>
}
