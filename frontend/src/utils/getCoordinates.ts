interface ICoordinates {
    x: number
    y: number
}

export const getCoordinates = (client: ICoordinates, delta: ICoordinates) => {
  const x = client.x - delta.x - 15
  const y = client.y - delta.y - 15
  return {
    x,
    y,
    cellX: Math.round(x/30),
    cellY: Math.round(y/30)
  }
}
