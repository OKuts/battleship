import {FC, memo} from 'react'
import {CellMy, CellEnemy} from "..";
import st from './Sea.module.scss'
import {useAppDispatch, useAppSelector} from '../../hooks/useAppDispatch';
import {getArrId, isTryPlace} from "../../utils";
import {ICell} from "../../store/types/field";
import {backSelectedShip, cleanShip, removeSelectedShip, setSelectedShip} from "../../store";

type SeaProps = {
  isEnemy: boolean
}

export const Sea: FC<SeaProps> = memo(({isEnemy}) => {
  const dispatch = useAppDispatch()
  const {fieldMy, fieldEnemy, overCell} = useAppSelector(state => state.field)
  const {isCtrlPressed} = useAppSelector(state => state.ctrl)
  const {selectedShip, flot} = useAppSelector(state => state.flot)

  const field = isEnemy ? fieldEnemy : fieldMy

  const cellParams = (cell: ICell) => {
    let isMarkCell = false
    if (selectedShip !== null && overCell.x !== null && overCell.y !== null) {
      const shipPlaceArr = getArrId(overCell.x, overCell.y, flot[selectedShip], isCtrlPressed)
      if (isTryPlace(shipPlaceArr, fieldMy))
        isMarkCell = shipPlaceArr.length ? shipPlaceArr.includes(cell.idCell) : false
    }
    return isMarkCell
  }

  const handlerMouseDown = (cell: ICell) => {
    if (cell.idShip) {
      dispatch(setSelectedShip(Number(cell.idShip[0])))
      dispatch(cleanShip(cell.idShip))
      dispatch(backSelectedShip())
    } else dispatch(removeSelectedShip())
    console.log(selectedShip)
  }

  return <table

    className={st.table}>
    <tbody>
    {
      field.arr.map((line, y) => {
        return <tr key={y}>
          {line.map(cell =>
            isEnemy
              ? <CellEnemy key={cell.idCell} cell={cell}/>
              : <CellMy
                handlerMouseDown ={handlerMouseDown}
                isMarkCell = {cellParams(cell)}
                key={cell.idCell}
                cell={cell}
              />
          )}
        </tr>
      })
    }
    </tbody>
  </table>
})
