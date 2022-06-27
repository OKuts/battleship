import {FC} from 'react'
import {OneCell} from "../Cell/OneCell";
import {useAppSelector} from "../../hooks/useAppDispatch";

type SeaProps = {
  enemy: boolean
}

export const Sea: FC<SeaProps> = ({enemy}) => {
  const  { fieldMy, fieldEnemy } = useAppSelector(state => state.field)

  const field = enemy ? fieldEnemy : fieldMy

   return (
    <>
      {
        field.map((line, y) =>
          line.map((cell, x) =>
            <OneCell
              enemy = {enemy}
              key={cell.id}
              cell={cell}
            />))
      }
    </>
  )
}
