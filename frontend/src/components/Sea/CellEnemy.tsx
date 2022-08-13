import {FC} from 'react'
import st from './Sea.module.scss'
import {useAppDispatch, useAppSelector} from '../../hooks/useAppDispatch'
import {nextBotStep, nextStep, setIsReady} from "../../store";
import {controlIsReady, getRandomIndex} from "../../utils";
import {Point} from "./Point";

interface CellEnemyProps {
  id: string
}

export const CellEnemy: FC<CellEnemyProps> = ({id}) => {
  const dispatch = useAppDispatch()
  const {isReady, flot, shotEnemyField} = useAppSelector(state => state.flot)

  const handlerClick = (id: string) => {
    if (isReady || controlIsReady(flot)) {
      dispatch(setIsReady())
      dispatch(nextStep(id))
      setTimeout(()=>{
        const id = String(getRandomIndex(9)) + String(getRandomIndex(9))
        dispatch(nextBotStep(id))
      }, 500)
    }
  }

  return <td
    onClick={() => handlerClick(id)}
    className={shotEnemyField[id] === true ? st.use : ''}
    id={id}>
    {shotEnemyField[id] === false && <Point/>}
  </td>

}
