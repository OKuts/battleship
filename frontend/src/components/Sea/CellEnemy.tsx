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
  const {isReady, flot, shotField} = useAppSelector(state => state.flot)

  const handlerClick = (id: string) => {
    if (isReady || controlIsReady(flot)) {
      dispatch(setIsReady())
      dispatch(nextStep(id))
    }
  }

  const pointTsx = () => {
    return <div className={st.empty}>
      <div></div>
    </div>
  }

  return <td
    onClick={() => handlerClick(id)}
    className={shotField[id] === true ? st.use : ''}
    id={id}>
    {shotField[id] === false && pointTsx()}
  </td>

}
