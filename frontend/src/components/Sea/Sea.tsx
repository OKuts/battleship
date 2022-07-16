import {FC, useEffect, useRef} from 'react'
import st from './Sea.module.scss'
import {getArr10x10} from "../../utils/getArr10x10";
import { CellEnemy } from './CellEnemy';
import { CellMy } from './CellMy';
import { useAppSelector } from '../../hooks/useAppDispatch';

interface SeaEnemyProps {
  isEnemy: boolean
}

export const Sea: FC<SeaEnemyProps> = ({isEnemy}) => {

  const ref = useRef<HTMLTableElement>(null)
  const {flot} = useAppSelector(state => state.flot)

  
  useEffect(()=>{
    if (ref.current) {
      const field = ref.current.getBoundingClientRect()
      console.log(field);
      console.log(flot);
      
    }
  }, [ref.current])

  return <table ref={ref} id = {'table'} className={st.table}>
    <tbody>
    {
      getArr10x10().map((line, y) =>
        <tr key={y}>
          {line.map((_: string, x: number) =>{
            const id = `${y}${x}`
            return isEnemy 
              ? <CellEnemy key = {id} id={id}/>
              : <CellMy key = {id} id={id} />
          }
          
          )}
        </tr>)
    }
    </tbody>
  </table>
}
