import st from './Sea.module.scss'
import {FC} from 'react'
import {useAppDispatch, useAppSelector} from '../../hooks/useAppDispatch'
import {nextStep} from "../../store";

interface CellEnemyProps {
  id: string
}

export const CellEnemy: FC<CellEnemyProps> = ({id}) => {
  const dispatch = useAppDispatch()
  const {enemyField} = useAppSelector(state => state.enemy)

  const setClassName = (value: boolean | null) => {
    switch (value) {
      case true : return 'use'
      case false: return 'notUse'
      default: return ''
    }
  }

  return <td
    onClick={() => dispatch(nextStep(id))}
    className={st[setClassName(enemyField[id])]} id={id}>
  </td>

}
