import st from './App.module.scss'
import {FC} from 'react'
import { BattleField } from '../BattleField/BattleField'
import {useAppSelector} from "../../hooks/useAppDispatch";

export const App: FC = () => {
  const  { fieldMy, fieldEnemy } = useAppSelector(state => state.field)

  return (
    <div className={st.app}>
      <div className={st.field}>
        <BattleField field={fieldMy}/>
      </div>
      <div className={st.field}>
        <BattleField field={fieldEnemy}/>
      </div>
    </div>
  )
}
