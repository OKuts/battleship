export enum Direction {
    ROW,
    COLUNN,
}

export enum Place {
    SEA,
    PORT,
  }

export interface IShip {
    id: number
    direction: Direction
    size: number
    wounds: boolean[]
    killed: boolean
    place: Place
    x: number
    y: number
    isMove: boolean
}
