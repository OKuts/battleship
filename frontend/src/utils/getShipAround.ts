import {ShipClass} from "../classes/ShipClass";

export const getShipAround = (ship: ShipClass) => {
  const startShipX = Math.round(ship.x / 30)
  const startShipY = Math.round(ship.y / 30)
  const endShipY = startShipY + (ship.direction ? 0 : Number(ship.id[0]) - 1)
  const endShipX = startShipX + (ship.direction ? Number(ship.id[0]) - 1 : 0)
  const startX = startShipX > 0 ? startShipX - 1 : startShipX
  const endX = endShipX < 9 ? endShipX + 1 : endShipX
  const startY = startShipY > 0 ? startShipY - 1 : startShipY
  const endY = endShipY < 9 ? endShipY + 1 : endShipY
  const shipCells = []
  const shipAround = []
  for (let y = startY; y <= endY; y++) {
    for (let x = startX; x <= endX; x++) {
      shipAround.push(`${y}${x}`)
      if (x >= startShipX && x <= endShipX && y >= startShipY && y <= endShipY) {
        shipCells.push(`${y}${x}`)
      }
    }
  }

  return [shipAround, shipCells]
}
