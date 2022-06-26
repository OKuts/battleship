import st from './Cell.module.scss'
import { FC } from 'react'

interface CellProps {
  n: number
}

export const Cell: FC<CellProps> = ({n}) => {
  return (
    <div
      id={`${n}`}
      className={(n+1) % 10 ? st.seaCell : st.seaCellLast}
    >
    </div>
  )
}
