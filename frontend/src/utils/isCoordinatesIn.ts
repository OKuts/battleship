export const isCoordinatesIn = (y: number, x: number, ctrl: boolean, size: number): boolean => {
  if (x < 0 || y < 0 || x > 9 || y > 9) return false
  if (ctrl && (y + size - 1) > 9) return false
  return !(!ctrl && (x + size - 1) > 9);
}
