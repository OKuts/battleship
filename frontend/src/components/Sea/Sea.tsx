import {FC, useEffect, useRef} from 'react'
import st from './Sea.module.scss'
import {getArr10x10} from "../../utils";
import { CellMy } from './CellMy';
import {useDispatch} from "react-redux";
import {setBegin} from "../../store";
import {CellEnemy} from "./CellEnemy";

interface ISeaProps {
  isMy: boolean
}

export const Sea: FC<ISeaProps> = ({isMy}) => {
  const dispatch = useDispatch()
  const ref = useRef<HTMLTableElement>(null)

  useEffect(()=>{
    if (ref.current) {
      const {x, y} = ref.current.getBoundingClientRect()
      dispatch(setBegin({ x, y}))
    }
  }, [])

  return <table ref={ref} className={st.table}>
    <tbody>
    {
      getArr10x10().map((line, y) =>
        <tr key={y}>
          {line.map((_: string, x: number) =>
            isMy
              ? <CellMy key = {`${y}${x}`} id={`${y}${x}`} />
              : <CellEnemy key = {`${y}${x}`} id={`${y}${x}`} />
          )}
        </tr>)
    }
    </tbody>
  </table>
}
