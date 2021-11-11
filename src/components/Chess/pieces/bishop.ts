import { findPosition } from "../../../utils/findPosition";
import { findColumn } from "../../../utils/findColumn";
import { findRow } from "../../../utils/findRow";

export default class Bishop {
  valid (position: number): number[] {
    let valids = [];

    const row = findRow(position);
    const column = findColumn(position);

    let currentRow = row;
    let currentColumn = column;

    while (currentRow !== 1 && currentColumn !== 8) {
        currentRow -= 1;
        currentColumn += 1;

        valids.push([currentRow, currentColumn]);
    };

    currentRow = row;
    currentColumn = column;

    while (currentRow !== 8 && currentColumn !== 1) {
        currentRow += 1;
        currentColumn -= 1;

        valids.push([currentRow, currentColumn]);
    };

    currentRow = row;
    currentColumn = column;

    while (currentRow !== 8 && currentColumn !== 8) {
        currentRow += 1;
        currentColumn += 1;

        valids.push([currentRow, currentColumn]);
    };

    currentRow = row;
    currentColumn = column;

    while (currentRow !== 1 && currentColumn !== 1) {
        currentRow -= 1;
        currentColumn -= 1;

        valids.push([currentRow, currentColumn]);
    };

    return valids.map((arr) => findPosition(arr[0], arr[1]));
  };
};