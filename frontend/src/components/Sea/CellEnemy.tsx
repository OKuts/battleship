import st from './Sea.module.scss'
import {FC} from 'react'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {selectMyCell, selectEnemyCell} from "../../store/fieldSlice";
import {ICell} from "../../store/types/field";

interface CellProps {
  cell: ICell
}

export const CellEnemy: FC<CellProps> = ({cell}) => {
  const dispatch = useAppDispatch()

  return (
    <td
      onClick={() => dispatch(selectEnemyCell(cell.idCell))}
      id={`${cell.idCell}`}
      className={cell.isUse ? st.cellMark : ''}
    >
    </td>
  )
}
