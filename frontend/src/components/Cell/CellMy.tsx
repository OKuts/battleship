import st from './Cell.module.scss'
import {FC} from 'react'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {selectMyCell, selectEnemyCell} from "../../store/fieldSlice";
import {ICell} from "../../store/types/field";

interface CellProps {
  cell: ICell
}

export const CellMy: FC<CellProps> = ({cell}) => {
  const dispatch = useAppDispatch()

  return (
    <div
      onClick={() => dispatch(selectMyCell(cell.id))}
      id={`${cell.id}`}
      className={
        cell.isUse
          ? cell.x === 9 ? st.cellMarkLast : st.cellMark
          : cell.x === 9 ? st.seaCellLast : st.cell
      }
    >
    </div>
  )
}
