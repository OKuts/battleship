import {FC} from 'react'
import st from './Sea.module.scss'
import {getArr10x10} from "../../utils/getArr10x10";
import { CellEnemy } from './CellEnemy';


export const SeaEnemy: FC = () => {

  return <table className={st.table}>
    <tbody>
    {
      getArr10x10().map((line, y) =>
        <tr key={y}>
          {line.map((_: string, x: number) => <CellEnemy key = {`${y}${x}`} id={`${y}${x}`} />)}
        </tr>)
    }
    </tbody>
  </table>
}
