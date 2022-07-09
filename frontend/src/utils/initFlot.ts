import { Direction, IShip, Place } from "../store/types/ship"

const initShip = (n: number, i: number): IShip => {
    return {
        id: i,
        direction: Direction.ROW,
        killed: false,
        size: n,
        wounds: Array(n).fill(false),
        place: Place.PORT,
        x: 0,
        y: -1,
    }
}

export const initFlot = () => [4,3,3,2,2,2,1,1,1,1].map((ship, i) => initShip(ship, i))
