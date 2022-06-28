import {FC} from 'react'
import {IFieldType} from "../../store/types/field";
import {CellMy} from "../Cell/CellMy";
import {CellEnemy} from "../Cell/CellEnemy";

type SeaProps = {
  field: IFieldType
}

export const Sea: FC<SeaProps> = ({field}) => {

   return (
    <>
      {
        field.arr.map((line, y) =>
          line.map((cell, x) =>
            field.isEnemy
              ? <CellEnemy key={cell.id} cell={cell} />
              : <CellMy key={cell.id} cell={cell} />
          ))
      }
    </>
  )
}
