import {ShipClass} from "../classes/ShipClass";
import {getShipAround} from ".";

export const isTryToPlace = (flot: ShipClass[]): boolean => {
  let sea: string[] = []
  for (let i = 0; i < flot.length; i++) {
    if (flot[i].isOnSea) {
      const [shipAround, shipCells] = getShipAround(flot[i])
      for (let j = 0; j < shipAround.length; j++)
          if (sea.includes(shipAround[j])) return false
      sea = [...sea, ...shipCells]
    }
  }
  return true
}
