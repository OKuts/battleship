import {FC, memo} from 'react'
import st from './BattleField.module.scss'

import {Sea, Port, Line} from ".."

interface BattleFieldProps {
  isEnemy: boolean
}

export const BattleField: FC<BattleFieldProps> = memo(({isEnemy}) => {
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
        <div
          className={st.field }>
          <Sea isEnemy={isEnemy}/>
          {!isEnemy && <Port/>}
        </div>
      </div>
    </div>
  )
})
