import {ShipClass} from "../classes/ShipClass";

export const initFlot = () => [4, 3, 3, 2, 2, 2, 1, 1, 1, 1].map((ship, i, arr) => {
    const shipId = `${ship}${i - arr.indexOf(ship)}`
    return new ShipClass(shipId, i)
  }
)
