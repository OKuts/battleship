export class Cell {
  readonly x: number
  readonly y: number
  isUse: boolean = true
  isEmpty: boolean = true
  id: string

  constructor (
    x: number,
    y: number,
    ) {
    this.x = x
    this.y = y
    this.id = `${this.y}${this.x}`
  }
}
