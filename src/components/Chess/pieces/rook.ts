import { findPosition } from "../../../utils/findPosition";

export default class Rook {
  valid (x: number, y: number) {
    let valids = [] as number[][];

    let x2 = x;
    let y2 = y;

    while (x2 !== 1) {
        x2 -= 1;

        valids.push([x2, y2]);
    };

    x2 = x;

    while (x2 !== 8) {
        x2 += 1;

        valids.push([x2, y2]);
    };

    x2 = x;

    while (y2 !== 1) {
        y2 -= 1;

        valids.push([x2, y2]);
    };

    y2 = y;

    while (y2 !== 8) {
        y2 += 1;

        valids.push([x2, y2]);
    };

    return valids.map((arr) => findPosition(arr[0], arr[1]));
  };
};