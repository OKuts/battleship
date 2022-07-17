export const initField = (enemy: boolean) => {
  return {
    arr: new Array(10).fill(new Array(10).fill(0))
      .map((line, y) => line.map((_: number, x: number) => ({
        x,
        y,
        isUse: false,
        idCell: `${y}${x}`,
        idShip: ''
      }))),
    isEnemy: enemy
  }
}
