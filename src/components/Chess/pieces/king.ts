import { findPosition } from "../../../utils/findPosition";
import { findColumn } from "../../../utils/findColumn";
import { findRow } from "../../../utils/findRow";
import { cleanInvalidPieces } from "../../../utils/cleanInvalidPieces";

export default class King {
  valid (position: number) {
    let valids: number[][] = [];

    const row = findRow(position);
    const column = findColumn(position);

    valids.push(
      [row + 1, column],
      [row - 1, column],
      [row, column + 1],
      [row, column - 1],
      [row + 1, column + 1],
      [row + 1, column - 1],
      [row - 1, column + 1],
      [row - 1, column - 1],
    );

    valids = cleanInvalidPieces(valids);

    return valids.map((arr) => findPosition(arr[0], arr[1]));
  };
};