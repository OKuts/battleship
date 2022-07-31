export const getSeaArr = () => {
  const arr = []
  for (let y = 0; y < 10; y++) {
    for (let x = 0; x < 10; x++) {
      arr.push(`${y}${x}`)
    }
  }
  return arr
}
