import { findPosition } from "../../../utils/findPosition";
import { findColumn } from "../../../utils/findColumn";
import { findRow } from "../../../utils/findRow";

export default class Rook {
  valid (position: number): number[] {
    let valids = [] as number[][];

    const row = findRow(position);
    const column = findColumn(position);

    let currentRow = row;
    let currentColumn = column;

    while (currentRow !== 1) {
        currentRow -= 1;

        valids.push([currentRow, currentColumn]);
    };

    currentRow = row;

    while (currentRow !== 8) {
        currentRow += 1;

        valids.push([currentRow, currentColumn]);
    };

    currentRow = row;

    while (currentColumn !== 1) {
        currentColumn -= 1;

        valids.push([currentRow, currentColumn]);
    };

    currentColumn = column;

    while (currentColumn !== 8) {
        currentColumn += 1;

        valids.push([currentRow, currentColumn]);
    };

    return valids.map((arr) => findPosition(arr[0], arr[1]));
  };
};