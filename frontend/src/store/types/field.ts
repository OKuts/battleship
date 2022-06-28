export interface ICell {
  x: number
  y: number
  isUse: boolean
  isEmpty: boolean
  id: string
}

export interface IFieldType {
  arr: ICell[][],
  isEnemy: boolean
}

export interface IFieldState {
  fieldMy: IFieldType
  fieldEnemy: IFieldType
}


