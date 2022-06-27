import st from './OneCell.module.scss'
import {FC} from 'react'
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {ICell, selectMyCell, selectEnemyCell} from "../../store/fieldSlice";

interface CellProps {
  cell: ICell
  enemy: boolean
}

export const OneCell: FC<CellProps> = ({cell, enemy}) => {
  const dispatch = useAppDispatch()
  
  return (
    <div
      onClick={() => dispatch(enemy ? selectEnemyCell(cell.id) : selectMyCell(cell.id))}
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
