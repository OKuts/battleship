export interface ICell {
  x: number
  y: number
  isUse: boolean
  isEmpty: boolean
  id: string
}

export interface IFieldType {
  arr: ICell[][],
}

export interface IFieldState {
  fieldMy: IFieldType
  fieldEnemy: IFieldType
  start: {
    x: number
    y: number
  }
}
