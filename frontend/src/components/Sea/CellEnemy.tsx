import st from './Sea.module.scss'
import {FC} from 'react'
import { useAppSelector } from '../../hooks/useAppDispatch'

interface CellEnemyProps {
  id: string
}

export const CellEnemy: FC<CellEnemyProps> = ({id}) => {

  const {enemyField} = useAppSelector(state => state.enemy)

  const setClassName = (value: boolean) => {
    switch (value) {
      case true : return 'use'
      case false: return 'notUse'
      default: return ''
    }
  } 
    
  return <td className={st[setClassName(enemyField[id])]} id={id}></td>

}
