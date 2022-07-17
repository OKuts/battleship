import {FC} from 'react'
import st from './App.module.scss'

import {BattleField} from '..'
import {Button} from '../../elements/Button/Button';
import {updateFlot} from '../../store';
import {SeaMy} from "../Sea/SeaMy";
import {SeaEnemy} from "../Sea/SeaEnemy";

export const App: FC = () => {
  return (
    <div
      className={st.app}>
      <div className={st.field}>
        <BattleField port>
          <SeaMy/>
        </BattleField>
      </div>
      <div className={st.buttons}>
        <Button text='Button1'/>
        <Button text='Button2'/>
        <Button text='Reset' func={[updateFlot]}/>
      </div>
      <div className={st.field}>
        <BattleField>
          <SeaEnemy/>
        </BattleField>
      </div>
    </div>
  )
}
