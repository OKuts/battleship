export const initEnemyField = () => {
  const arr = [true, false, null]
  const field: any = {}
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      field[`${i}${j}`] = arr[Math.floor(Math.random() * 3)]
    }
  }

  return field
}
