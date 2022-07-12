import {FC, memo} from 'react'
import {ICell} from "../../store/types/field";
import st from './Sea.module.scss'

interface CellProps {
  cell: ICell
  isMarkCell: boolean
  handlerMouseDown: (cell: ICell) => void
}

export const CellMy: FC<CellProps> = memo(({cell, isMarkCell, handlerMouseDown}) => {

  let cn = ''
  if (cell.idShip) cn = st.ship
  if (isMarkCell) cn = st.overCell

  return <td
    onMouseDown={() => handlerMouseDown(cell)}
    className={cn}
    id={`${cell.idCell}`}
  >
    {cell.idShip}
  </td>
})
