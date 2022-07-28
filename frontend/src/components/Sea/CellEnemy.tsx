import {FC} from 'react'
import st from './Sea.module.scss'
import {useAppDispatch, useAppSelector} from '../../hooks/useAppDispatch'
import {nextStep, setIsReady} from "../../store";
import {controlIsReady} from "../../utils";

interface CellEnemyProps {
  id: string
}

export const CellEnemy: FC<CellEnemyProps> = ({id}) => {
  const dispatch = useAppDispatch()
  const {enemyField} = useAppSelector(state => state.enemy)
  const {isReady, flot} = useAppSelector(state => state.flot)

  const handlerClick = (id: string) => {
    if (isReady || controlIsReady(flot)) {
      dispatch(setIsReady())
      dispatch(nextStep(id))
    }
  }

  const setClassName = (value: boolean | null) => {
    switch (value) {
      case true : return 'use'
      case false: return 'notUse'
      default: return ''
    }
  }

  return <td
    onClick={() => handlerClick(id)}
    className={st[setClassName(enemyField[id])]} id={id}>
  </td>

}
