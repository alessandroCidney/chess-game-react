import { findPosition } from "../utils/findPosition";
import { findColumn } from "../utils/findColumn";
import { findRow } from "../utils/findRow";
import { cleanInvalidPieces } from "../utils/cleanInvalidPieces";

export default class Knight {
  valid (position: number): number[]{
    let valids = [];

    const row = findRow(position);
    const column = findColumn(position);

    valids.push(
      [row + 2, column + 1],
      [row + 2, column - 1],
      [row - 2, column + 1],
      [row - 2, column - 1],
      [row + 1, column + 2],
      [row + 1, column - 2],
      [row - 1, column + 2],
      [row - 1, column - 2]
    );

    valids = cleanInvalidPieces(valids);

    return valids.map((arr) => findPosition(arr[0], arr[1]));
  };
};