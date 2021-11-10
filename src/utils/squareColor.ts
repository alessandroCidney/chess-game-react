import { findRow } from "./findRow";
import { findColumn } from "./findColumn";

export function squareColor (n: number): string {
  let color = '';
  let row = findRow(n);
  let column = findColumn(n);

  if (row % 2 !== 0) {
    color = column % 2 === 0 ? '#613A3A' : '#FFF';
  } else {
    color = column % 2 === 0 ? '#FFF' : '#613A3A';
  }

  return color;
};