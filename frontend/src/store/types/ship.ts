export enum Direction {
    ROW,
    COLUNN,
}

export enum Place {
    SEA,
    PORT,
  }

export interface IShip {
    direction: Direction
    size: number
    wounds: boolean[]
    killed: boolean
    place: Place
}