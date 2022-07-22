import {FC, useEffect, useRef} from 'react'
import st from './Sea.module.scss'
import {getArr10x10} from "../../utils/getArr10x10";
import { CellMy } from './CellMy';
import {useDispatch} from "react-redux";
import {setBegin} from "../../store";

export const SeaMy: FC = () => {
  const dispatch = useDispatch()
  const ref = useRef<HTMLTableElement>(null)

  useEffect(()=>{
    if (ref.current) {
      const {x, y} = ref.current.getBoundingClientRect()
      dispatch(setBegin({beginX: x, beginY: y}))
    }
  }, [])

  return <table ref={ref} className={st.table}>
    <tbody>
    {
      getArr10x10().map((line, y) =>
        <tr key={y}>
          {line.map((_: string, x: number) =><CellMy key = {`${y}${x}`} id={`${y}${x}`} />)}
        </tr>)
    }
    </tbody>
  </table>
}
