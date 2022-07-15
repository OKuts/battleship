export enum Direction {
  ROW,
  COLUMN,
}

export interface IShip {
  id: string
  direction: Direction
  size: number
  wounds: boolean[]
  x: number
  y: number
}

export interface ISelectedShip extends Omit <IShip, 'wounds'>{}

export interface IInitialFlot {
  flot: IShip[],
  selectedShip: ISelectedShip | null
  isReady: boolean
}

