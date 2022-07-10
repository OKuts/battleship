import st from './App.module.scss'
import {FC, useEffect} from 'react'
import {BattleField} from '../BattleField/BattleField'
import {Button} from '../../elements/Button/Button';
import {placeShip, setOverCell, updateFields} from '../../store/fieldSlice';
import {BattleFieldEnemy} from "../BattleField/BattleFieldEnemy";
import {useAppDispatch, useAppSelector} from "../../hooks/useAppDispatch";
import {setIsCtrlPressed} from "../../store/ctrlSlice";
import {backSelectedShip, removeSelectedShip} from "../../store/shipSlice";
import {isCoordinateIn} from "../../utils/isCoordinateIn";

export const App: FC = () => {
  const dispatch = useAppDispatch()
  const {selectedShip, flot} = useAppSelector(state => state.flot)
  const {isCtrlPressed} = useAppSelector(state => state.ctrl)
  const {x, y} = useAppSelector(state => state.field.overCell)

  const handlerMouseUp = () => {
    console.log('handlerMouseUp selectedShip', selectedShip)
    if (selectedShip !== null && x !== null && y !== null) {
      dispatch(placeShip({ship: flot[selectedShip], isCtrlPressed}))
    } else {
      dispatch(backSelectedShip())
    }
    dispatch(removeSelectedShip())
    dispatch(setOverCell({x: null, y: null}))
  }

  const handlerCtrlDown = (e: KeyboardEvent) => {
    if (e.ctrlKey) dispatch(setIsCtrlPressed(true))
  }

  const handlerCtrlUp = (e: KeyboardEvent) => {
    console.log('handlerCtrlUp selectedShip', selectedShip)
    if (e.ctrlKey) dispatch(setIsCtrlPressed(false))
  }

  useEffect(() => {
    window.addEventListener('keydown', handlerCtrlDown)
    window.addEventListener('keyup', handlerCtrlUp)
    return
  }, [])

  return (
    <div
      onMouseUp={handlerMouseUp}
      className={st.app}>
      <div className={st.field}>
        <BattleField/>
      </div>
      <div className={st.buttons}>
        <Button text='Button1'/>
        <Button text='Button2'/>
        <Button text='Reset' func={updateFields}/>
      </div>
      <div className={st.field}>
        <BattleFieldEnemy/>
      </div>
    </div>
  )
}

// if (selectedShip !== null && x !== null && y !== null) {
//   const isXYIn = isCoordinateIn(y, x, isCtrlPressed, flot[selectedShip].size)
//   console.log('yes', isXYIn)
//   if (!isXYIn) dispatch(setOverCell( {x: null, y: null}))
// }
