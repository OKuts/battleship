import {ShipClass} from "../classes/ShipClass";

export const controlIsReady = (flot: ShipClass[]): boolean => {
  let ready = true
  flot.forEach(ship => {
    if (ready) ready = ship.isOnSea
  })
  return ready
}
