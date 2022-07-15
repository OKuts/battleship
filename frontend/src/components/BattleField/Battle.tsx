import { FC, ReactNode} from 'react'
import { Port } from '../Port/Port'
import st from './BattleField.module.scss'
import { Line } from './Line'

interface IBattleProps {
  children: ReactNode
  port?: boolean
}

export const Battle: FC<IBattleProps> = ({children, port}) => {
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
      <div className={st.field }>
        {children}
        {port && <Port/>}
      </div>
    </div>
  </div>
  )
}
