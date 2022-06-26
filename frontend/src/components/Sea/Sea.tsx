import {FC} from 'react'
import {Field} from "../../models/Field";
import {OneCell} from "../Cell/OneCell";


interface SeaProps {
  sea: Field
}

export const Sea: FC<SeaProps> = ({sea}) => {

  return (
    <>
      {
        sea.field.map((line, y) =>
          line.map((cell, x) =>
            <OneCell
              key={cell.id}
              cell={cell}
            />))
      }
    </>
  )
}
