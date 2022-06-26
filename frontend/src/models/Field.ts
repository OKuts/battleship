import {Cell} from "./Cell";

export class Field {
  field: Cell[][] = []

  initField() {
    const field = new Array(10).fill(new Array(10).fill(0))
    field.forEach((line, y) => {
      const tempArr: Cell[] = []
      line.forEach((_: number, x: number) => {
        tempArr.push(new Cell(x, y))
      })
      this.field.push(tempArr)
    })
  }
}
