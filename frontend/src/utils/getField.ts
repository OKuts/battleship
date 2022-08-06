import {ShipClass} from "../classes/ShipClass";
import {IField} from "../store/types/ship";

export const getField = (flot: ShipClass[]): IField => {
  const out: IField = {}

  flot.forEach(ship => {
    const y = Number(ship.id[3])
    const x = Number(ship.id[4])
    for (let i = 0; i < Number(ship.id[0]); i++) {
      ship.direction ? out[`${y}${x+i}`] = true : out[`${y + i}${x}`] = true
    }
  })

  return out
}
