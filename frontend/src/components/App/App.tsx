import st from './App.module.scss'
import {FC, useEffect, useState} from 'react'
import {BattleField} from "../BattleField/BattleField";
import {Field} from "../../models/Field";

export const App: FC = () => {
  const [battleField, setBattleField] = useState(new Field())

  useEffect(() => {
    const newBattleField = new Field()
    newBattleField.initField()
    setBattleField(newBattleField)
  }, [])

  return (
    <div className={st.app}>
      <div className={st.field}>
        <BattleField battleField={battleField}/>
      </div>
      <div className={st.field}>
        <BattleField battleField={battleField}/>
      </div>
    </div>
  )
}
