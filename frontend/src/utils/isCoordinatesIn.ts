export const isCoordinatesIn = (
  x: number,
  y: number,
  direction: boolean,
  size: number
): boolean => {
  if (x < 0 || y < 0 || x > 9 || y > 9) return false
  if (!direction && (y + size - 1) > 9) return false
  return !(direction && (x + size - 1) > 9);
}
