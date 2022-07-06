import st from './App.module.scss'
import {FC} from 'react'
import { BattleField } from '../BattleField/BattleField'
import { Button } from '../../elements/Button/Button';
import { updateFields } from '../../store/fieldSlice';
import {BattleFieldEnemy} from "../BattleField/BattleFieldEnemy";

export const App: FC = () => {

  return (
    <div className={st.app}>
      <div className={st.field}>
        <BattleField/>
      </div>
      <div className={st.buttons}>
        <Button text='Button1' />
        <Button text='Button2' />
        <Button text='Reset' func = {updateFields}/>
      </div>
      <div className={st.field}>
        <BattleFieldEnemy />
      </div>
    </div>
  )
}
