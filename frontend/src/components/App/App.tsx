import {FC} from 'react'
import st from './App.module.scss'

import {BattleField} from '..'
import {Button} from '../../elements/Button/Button';
import {updateFields, updateFlot} from '../../store';

export const App: FC = () => {
  return (
    <div
      className={st.app}>
      <div className={st.field}>
        <BattleField isEnemy={false}/>
      </div>
      <div className={st.buttons}>
        <Button text='Button1'/>
        <Button text='Button2'/>
        <Button text='Reset' func={[updateFields, updateFlot]}/>
      </div>
      <div className={st.field}>
        <BattleField isEnemy/>
      </div>
    </div>
  )
}
