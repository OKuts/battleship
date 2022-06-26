import st from './OneCell.module.scss'
import {FC, MouseEventHandler} from 'react'
import {Cell} from "../../models/Cell";

interface CellProps {
  cell: Cell
}

export const OneCell: FC<CellProps> = ({cell}) => {

  const handlerClick: MouseEventHandler<HTMLDivElement> = (e): void => {
    console.log(e.target.id)
  }

  return (
    <div
      onClick = {handlerClick}
      id = {`${ cell.id }`}
      className = {cell.x === 9 ? st.seaCellLast : st.seaCell }
    >
    </div>
  )
}
