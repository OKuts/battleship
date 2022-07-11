import {FC, memo} from 'react'
import st from './BattleField.module.scss'

import {Line, Sea} from ".."

export const BattleFieldEnemy: FC = memo(() => {

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
})
