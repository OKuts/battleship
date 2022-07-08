import st from './BattleField.module.scss'
import {FC} from 'react'
import {Line} from "./Line";
import {Sea} from "../Sea/Sea";
import {useAppSelector} from "../../hooks/useAppDispatch";

export const BattleFieldEnemy: FC = () => {
  const  { fieldEnemy } = useAppSelector(state => state.field)
  return (
    <div>
      <div className={st.numberLine}>
        <div className={st.cell}></div>
        <Line start={48}/>
      </div>
      <div className={st.letterField}>
        <div>
          <Line start={65}/>
        </div>
        <div>
          <Sea isEnemy={true}/>
        </div>
      </div>
    </div>
  )
}
