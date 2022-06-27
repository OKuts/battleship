import {FC} from 'react'
import {OneCell} from "../Cell/OneCell";
import {useAppSelector} from "../../hooks/useAppDispatch";

export const Sea: FC = () => {
  const { field } = useAppSelector(state => state.field)
  return (
    <>
      {
        field.map((line, y) =>
          line.map((cell, x) =>
            <OneCell
              key={cell.id}
              cell={cell}
            />))
      }
    </>
  )
}
