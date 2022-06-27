import st from './OneCell.module.scss'
import {FC} from 'react'
import {Cell} from "../../models/Cell";
import {useAppDispatch} from "../../hooks/useAppDispatch";
import {selectCell} from "../../store/fieldSlice";

interface CellProps {
  cell: Cell
}

export const OneCell: FC<CellProps> = ({cell}) => {
  const dispatch = useAppDispatch()
  console.log('rerender')
  return (
    <div
      onClick={() => dispatch(selectCell(cell.id))}
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
