import {Direction, IShip} from "../store/types/ship"

const initShip = (ship: number, i: number, first: number, count: number): IShip => {
  const start = (i - first) * ship * 30
  return {
    id: i,
    direction: Direction.ROW,
    size: ship,
    wounds: Array(ship).fill(false),
    x: 150 + start - ship / 2 * 30 - count  * 15,
    y: 300 + (120 - ship * 30) + (4 - ship) * 4,
  }
}

export const initFlot = () => [4, 3, 3, 2, 2, 2, 1, 1, 1, 1].map((ship, i, arr) => {
    const first = arr.indexOf(ship)
    const count = arr.lastIndexOf(ship) - first
    return initShip(ship, i, first, count)
  }
)
