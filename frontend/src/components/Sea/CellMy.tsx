import {FC} from 'react'
import {useAppSelector} from "../../hooks/useAppDispatch";
import {Point} from "./Point";

interface CellProps {
  id: string
}

export const CellMy: FC<CellProps> = ({id}) => {
  const {shotMyField} = useAppSelector(state => state.flot)

  return <td id={id}>
    {shotMyField[id] === false && <Point/>}
  </td>
}
