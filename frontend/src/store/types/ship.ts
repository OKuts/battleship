export enum Direction {
  ROW,
  COLUMN,
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
}



export interface IInitialState {
  flot: IShip[],
  selectedShip: null | number
}

export interface ISelectionShip {
  id: number | null
  x: number | null
  y: number | null
  direction: Direction
}
