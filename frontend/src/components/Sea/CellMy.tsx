import {FC} from 'react'
import {ICell} from "../../store/types/field";
import {useAppSelector} from "../../hooks/useAppDispatch";
import st from './Sea.module.scss'
import {IShip} from "../../store/types/ship";
import {IFieldType} from "../../store/types/field";

interface CellProps {
  cell: ICell
}

const isAreaEmpty = (
  c: number, r: number, ctrl: boolean, ship: IShip, field: IFieldType
  ): boolean => {
  let column = c === -5 ? 0 : c
  let row = r === -5 ? 0 : r
  const startX = column > 0 ? column - 1 : column
  const startY = row > 0 ? row -1 : row
  let endX = (column + ship.size) > 9 ? 9 : (column + ship.size)
  if (ctrl) endX = column > 8 ? column : column + 1
  let endY = row > 8 ? row : row + 1
  if (ctrl) endY = (row + ship.size) > 9 ? 9 : (row + ship.size)
  for (let y = startY; y <= endY; y++) 
    for (let x = startX; x <= endX; x++) 
      if (!field.arr[y][x].idShip) {
        console.log('no', field.arr[y][x].idShip);
        return false
      } else {
        console.log('yes', field.arr[y][x].idShip);
      }
  return true
}

const getArrId = (column: number, row: number, ship: IShip, ctrl: boolean): string[] => {
  const out: string[] = []
  const indicator = ctrl ? row : column
  for (let i = indicator; i < indicator + ship.size; i++) {
    out.push(ctrl ? `${i}${column}`:`${row}${i}`)
  }
  return out
}

export const CellMy: FC<CellProps> = ({cell}) => {
  const {isCtrlPressed} = useAppSelector(state => state.ctrl)
  const {overCell, fieldMy} = useAppSelector(state => state.field)
  const {selectedShip, flot} = useAppSelector(state => state.flot)

  let isMarkCell = false
  
  if (selectedShip !== null) {
    // if (!isAreaEmpty(overCell.x, overCell.y, isCtrlPressed, flot[selectedShip], fieldMy)) {
      isMarkCell = getArrId(overCell.x, overCell.y, flot[selectedShip], isCtrlPressed)
        .includes(cell.idCell) 
        && !isAreaEmpty(overCell.x, overCell.y, isCtrlPressed, flot[selectedShip], fieldMy)
    // }
  }

  return <td
    className={cell.idShip || isMarkCell ? st.overCell : ''}
    id={`${cell.idCell}`}
  >
    {cell.idShip}
  </td>
}
