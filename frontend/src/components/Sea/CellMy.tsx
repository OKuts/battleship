import {FC} from 'react'

interface CellProps {
  id: string
}

export const CellMy: FC<CellProps> = ({id}) => {
  return <td id={`${id}`}></td>
}
