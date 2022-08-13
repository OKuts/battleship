import {ShipClass} from "../classes/ShipClass";

export const shotToShip = (flot: ShipClass[], yx: string): string=> {
  const [y, x] = yx
  for (let j = 0; j < 10 ; j++) {
    const shipY = flot[j].id[3]
    const shipX = flot[j].id[4]

    if (shipY === y && flot[j].direction) {
      for (let i = 0; i < flot[j].id[0]; i++) {
        if (y + (i + +x) === yx) return `${j}${i}`
      }
    }

    if (shipX === x && !flot[j].direction) {
      for (let i = 0; i < flot[j].id[0]; i++) {
        if (i+(i + +y) === yx) return `${j}${i}`
      }
    }
  }

  return ''
}
