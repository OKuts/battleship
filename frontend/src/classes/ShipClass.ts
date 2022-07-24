export class ShipClass {
  id: string
  direction: boolean
  wounds: boolean[]
  x: number | null
  y: number | null

  constructor(shipId: string) {
    const ship = Number(shipId[0])
    const count = 4 - ship
    const index = Number(shipId[1])
    const start = index * ship * 30 - (count) * 2
    this.id = shipId
    this.direction = true
    this.wounds = Array(ship).fill(false)
    this.x = 150 + start - ship / 2 * 30 - count * 15 * ship + index * 4
    this.y = 304 + (120 - ship * 30) + count * 4
  }
}
