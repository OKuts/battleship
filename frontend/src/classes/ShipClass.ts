export enum ShipDirection {
  ROW,
  COLUMN,
}

export class ShipClass {
  i: number
  id: string
  direction: ShipDirection
  size: number
  wounds: boolean[]
  x: number | null
  y: number | null

  constructor(shipId: string, i: number) {
    const ship = Number(shipId[0])
    const count = 4 - ship
    const index = Number(shipId[1])
    const start = index * ship * 30 - (count) * 2
    this.i = i
    this.id = shipId
    this.direction = ShipDirection.ROW
    this.size = ship
    this.wounds = Array(ship).fill(false)
    this.x = 150 + start - ship / 2 * 30 - count * 15 * ship + index * 4
    this.y = 304 + (120 - ship * 30) + count * 4
  }
}
