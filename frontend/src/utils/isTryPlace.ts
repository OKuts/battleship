import {IFieldType} from "../store/types/field";

const roundCoordinate = (arr: number[]) => {
  let start = arr[0] === 0 ? 0 : arr[0] - 1
  let end = arr[arr.length-1] === 9 ? 9 :arr[arr.length-1] + 1
  return [start < 0 ? 0 : start, end > 9 ? 9 : end]
}

export const isTryPlace = (arr: string[], field: IFieldType): boolean => {
  let xTemp: number[] = []
  let yTemp: number[] = []
  arr.forEach(el => {
    yTemp.push(Number(el[0]))
    xTemp.push(Number(el[1]))
  })
  const xArr = [...new Set(xTemp)]
  const yArr = [...new Set(yTemp)]
  const [xStart, xEnd] = roundCoordinate(xArr)
  const [yStart, yEnd] = roundCoordinate(yArr)
  for (let i = yStart; i <= yEnd; i++)
    for (let j = xStart; j <= xEnd ; j++)
      if (field.arr[i][j].idShip) return false
  return true
}
