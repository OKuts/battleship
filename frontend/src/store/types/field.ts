export interface ICell {
  x: number
  y: number
  isUse: boolean
  isEmpty: boolean
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
    x: number
    y: number
  }
}
