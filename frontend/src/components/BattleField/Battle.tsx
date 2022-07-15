import {FC, memo, ReactNode} from 'react'
import st from './BattleField.module.scss'

interface IBattleProps {
  children: any
}

export const Battle: FC<IBattleProps> = memo(({children}) => {
  console.log('Battle')
  return (
    <div>
      {children}
    </div>
  )
})
