import { findPosition } from "../utils/findPosition";
import { findColumn } from "../utils/findColumn";
import { findRow } from "../utils/findRow";
import { cleanInvalidPieces } from "../utils/cleanInvalidPieces";

export default class Pawn {
  valid (position: number, pawnMode: string): number[] {
    let valids = [];

    let row = findRow(position);
    let column = findColumn(position);
    
    if (pawnMode === 'bottom-to-top') {
      valids.push(
        [row - 1, column]
      );

      if (row === 7) {
        valids.push(
          [row - 2, column]
        );
      };
    } else if (pawnMode === 'from-top-to-bottom') {
      valids.push(
        [row + 1, column]
      );

      if (row === 2) {
        valids.push(
          [row + 2, column]
        );
      };
    };

    valids = cleanInvalidPieces(valids);

    return valids.map((arr) => findPosition(arr[0], arr[1]));
  };
};