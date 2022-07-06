import {FC} from 'react'
import {ICell} from "../../store/types/field";

interface CellProps {
  cell: ICell
}

export const CellMy: FC<CellProps> = ({cell}) => <td id={`${cell.id}`}></td>
