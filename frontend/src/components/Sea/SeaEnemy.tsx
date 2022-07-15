import {FC, memo} from 'react'
import st from './Sea.module.scss'
import {useAppSelector} from "../../hooks/useAppDispatch";
import {getArr10x10} from "../../utils/getArr10x10";

export const SeaEnemy: FC = () => {

  const {enemyField} = useAppSelector(state => state.enemy)

  return <table
    className={st.table}>
    <tbody>
    {
      getArr10x10().map((line, y) =>
        <tr key={y}>
          {line.map((_: string, x: number) =>
            <td key={`${y}${x}`}>{y}{x}</td>
          )}
        </tr>)
    }
    </tbody>
  </table>
}
