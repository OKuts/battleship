import {FC} from 'react'
import {ICell} from "../../store/types/field";
import {useAppSelector} from "../../hooks/useAppDispatch";
import st from './Sea.module.scss'
import {isTryPlace, getArrId} from "../../utils";

interface CellProps {
  cell: ICell
}

export const CellMy: FC<CellProps> = ({cell}) => {
  const {isCtrlPressed} = useAppSelector(state => state.ctrl)
  const {overCell, fieldMy} = useAppSelector(state => state.field)
  const {selectedShip, flot} = useAppSelector(state => state.flot)

  let isMarkCell = false
  if (selectedShip !== null && overCell.x !== null && overCell.y !== null) {
    const shipPlaceArr = getArrId(overCell.x, overCell.y, flot[selectedShip], isCtrlPressed)
    if (isTryPlace(shipPlaceArr, fieldMy))
      isMarkCell = shipPlaceArr.length ? shipPlaceArr.includes(cell.idCell) : false
  }

  let cn = ''
  if (cell.idShip) cn = st.ship
  if (isMarkCell) cn = st.overCell

  return <td
    className={cn}
    id={`${cell.idCell}`}
  >
    {cell.idShip}
  </td>
}
