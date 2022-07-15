import {FC} from 'react'
import st from './App.module.scss'

import {Battle} from '..'
import {Button} from '../../elements/Button/Button';
import {updateFields, updateFlot} from '../../store';
import {Sea} from "../Sea/Sea";

export const App: FC = () => {
  return (
    <div
      className={st.app}>
      <div className={st.field}>
        <Battle port>
          <Sea isEnemy={false}/>
        </Battle>
      </div>
      <div className={st.buttons}>
        <Button text='Button1'/>
        <Button text='Button2'/>
        <Button text='Reset' func={[updateFields, updateFlot]}/>
      </div>
      <div className={st.field}>
        <Battle>
          <Sea isEnemy = {true}/>
        </Battle>
      </div>
    </div>
  )
}
