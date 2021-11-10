export function findPosition (row: number, column: number) {
  return column + (row-1) * 8;
};