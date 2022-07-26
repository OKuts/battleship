import {ShipClass} from "../classes/ShipClass";

export const isTryToPlace = (flot: ShipClass[]): boolean => {
  const sea: string[] = []
  for (let i = 0; i < flot.length; i++) {
    if (flot[i].isOnSea) {
      const startShipX = Math.round(flot[i].x / 30)
      const startShipY = Math.round(flot[i].y / 30)
      const endShipY = startShipY + (flot[i].direction ? 0 : Number(flot[i].id[0]) - 1)
      const endShipX = startShipX + (flot[i].direction ? Number(flot[i].id[0]) - 1 : 0)
      const startX = startShipX > 0 ? startShipX - 1 : startShipX
      const endX = endShipX < 9 ? endShipX + 1 : endShipX
      const startY = startShipY > 0 ? startShipY - 1 : startShipY
      const endY = endShipY < 9 ? endShipY + 1 : endShipY
      for (let y = startY; y <= endY; y++) {
        for (let x = startX; x <= endX; x++) {
          if (sea.includes(`${y}${x}`)) return false
          if (x >= startShipX && x <= endShipX && y >= startShipY && y <= endShipY) {
            sea.push(`${y}${x}`)
          }
        }
      }
    }
  }
  return true
}
