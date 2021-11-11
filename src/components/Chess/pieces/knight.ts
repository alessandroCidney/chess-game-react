import { findPosition } from "../../../utils/findPosition";
import { findColumn } from "../../../utils/findColumn";
import { findRow } from "../../../utils/findRow";

export default class Knight {
  valid (position: number) {
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

    for (let i = valids.length - 1; i >= 0; i--) {
      if (
        valids[i][0] > 8
        || valids[i][0] < 1
        || valids[i][1] > 8
        || valids[i][1] < 1
      ) {
        valids.splice(i, 1);
      };
    };

    return valids.map((arr) => findPosition(arr[0], arr[1]));
  };
};