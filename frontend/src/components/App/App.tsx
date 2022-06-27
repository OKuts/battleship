import st from './App.module.scss'
import {FC} from 'react'
import { BattleField } from '../BattleField/BattleField'

export const App: FC = () => {
  return (
    <div className={st.app}>
      <div className={st.field}>
        <BattleField enemy = {false}/>
      </div>
      <div className={st.field}>
        <BattleField enemy = {true}/>
      </div>
    </div>
  )
}
