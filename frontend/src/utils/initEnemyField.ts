export const initEnemyField = () => {
  const field: any = {}
  for (let i = 0; i < 10; i++) {
    for (let j = 0; j < 10; j++) {
      field[`${i}${j}`] = null
    }
  }

  return field
}
