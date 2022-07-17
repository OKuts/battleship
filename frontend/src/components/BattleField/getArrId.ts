import {ShipClass} from "../../classes/ShipClass";

export const getArrId = (column: number, row: number, ship:ShipClass, ctrl: boolean): string[] => {

  if (column < 0 || column > 9 || row < 0 || row > 9) return []
  const out: string[] = []
  const indicator = ctrl ? row : column
  for (let i = indicator; i < indicator + ship.size; i++) {
    out.push(ctrl ? `${i}${column}` : `${row}${i}`)
  }
  return out
}
