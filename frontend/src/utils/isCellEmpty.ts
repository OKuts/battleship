import {ShipClass} from "../classes/ShipClass";

export const isCellEmpty = (flot: ShipClass[], id: string): boolean => {
  for (const ship of flot) {
    if(ship.id[3] === id[0] || ship.id[4] === id[1]){
      console.log(ship.id, ship.direction)
    }
  }
  return false
}
