import {FC} from 'react'
import {ICell} from "../../store/types/field";
import {useAppSelector} from "../../hooks/useAppDispatch";
import st from './Sea.module.scss'
import {IShip} from "../../store/types/ship";

interface CellProps {
  cell: ICell
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
  const  { isCtrlPressed } = useAppSelector(state => state.ctrl)
  const {overCell} = useAppSelector(state => state.field)
  const {selectedShip, flot} = useAppSelector(state => state.flot)
  let isMarkCell = false
  if (selectedShip !== null) {
    isMarkCell = getArrId(overCell.x, overCell.y, flot[selectedShip], isCtrlPressed).includes(cell.id)
  }

  return <td
    className={isMarkCell ? st.overCell : ''}
    id={`${cell.id}`}
  ></td>
}
