import st from './App.module.scss'
import {FC} from 'react'
import { BattleField } from '../BattleField/BattleField'
import {useAppSelector} from "../../hooks/useAppDispatch";
import { Button } from '../../elements/Button/Button';
import { updateFields } from '../../store/fieldSlice';

export const App: FC = () => {
  const  { fieldMy, fieldEnemy } = useAppSelector(state => state.field)

  return (
    <div className={st.app}>
      <div className={st.field}>
        <BattleField field={fieldMy}/>
      </div>
      <div className={st.buttons}>
        <Button text='Button1' />
        <Button text='Button2' />
        <Button text='Reset' func = {updateFields}/>
      </div>
      <div className={st.field}>
        <BattleField field={fieldEnemy} />
      </div>
    </div>
  )
}
