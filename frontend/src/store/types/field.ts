export interface ICell {
  x: number
  y: number
  isUse: boolean
  idCell: string
  idShip: string
}

export interface IFieldType {
  arr: ICell[][],
}

export interface IFieldState {
  fieldMy: IFieldType
  fieldEnemy: IFieldType
  delta: {
    x: number
    y: number
  }
  overCell: {
    x: number | null
    y: number | null
  }
  client: {
    x: number | null,
    y: number | null
  }
}

export interface ISetCoordinates {
  name: string,
  x: number | null,
  y: number | null
}
