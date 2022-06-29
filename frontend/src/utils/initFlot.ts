import { Direction, IShip, Place } from "../store/types/ship"

const initShip = (n: number): IShip => {
    return {
        direction: Direction.ROW,
        killed: false,
        size: n,
        wounds: Array(n).fill(false),
        place: Place.PORT
    }
}

export const initFlot = () => [4,3,3,2,2,2,1,1,1,1].map(ship => initShip(ship))