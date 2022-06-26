import st from './Sea.scss'
import {FC} from 'react'
import {Field} from "../../models/Field";
import {Cell} from "../Cell/Cell";

interface SeaProps {
    sea: Field
  }

export const Sea: FC<SeaProps> = ({sea}) => {

  return (
    <>
      {
        sea.field.map((line, y) =>
          line.map((cell, x) =>
            <Cell
              key = {cell.id}
              n={y * 10 + x} />))
      }
    </>
  )
}
