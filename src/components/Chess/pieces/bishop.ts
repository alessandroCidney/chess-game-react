import { findPosition } from "../../../utils/findPosition";
import { findColumn } from "../../../utils/findColumn";
import { findRow } from "../../../utils/findRow";
import { ChessArrayPiece } from "../../../utils/generateChess";
import { verifyAlreadyFilledSquare } from "../../../utils/verifyAlreadyFilledSquare";
export default class Bishop {
  valid (position: number, chessSnapshot: ChessArrayPiece[]): number[] {
    let valids = [];

    const row = findRow(position);
    const column = findColumn(position);
    let currentPiece = chessSnapshot.find(piece => piece.position === position);

    let currentRow = row;
    let currentColumn = column;
    

    while (currentRow !== 1 && currentColumn !== 8) {
        currentRow -= 1;
        currentColumn += 1;

        if (
          currentPiece 
          && verifyAlreadyFilledSquare(
              chessSnapshot,
              currentRow,
              currentColumn,
              currentPiece,
              currentRow + 1,
              currentColumn - 1
        )) {
          break;
        }

        valids.push([currentRow, currentColumn]);
    };

    currentRow = row;
    currentColumn = column;

    while (currentRow !== 8 && currentColumn !== 1) {
        currentRow += 1;
        currentColumn -= 1;

        if (
          currentPiece 
          && verifyAlreadyFilledSquare(
              chessSnapshot,
              currentRow,
              currentColumn,
              currentPiece,
              currentRow - 1,
              currentColumn + 1
        )) {
          break;
        }

        valids.push([currentRow, currentColumn]);
    };

    currentRow = row;
    currentColumn = column;

    while (currentRow !== 8 && currentColumn !== 8) {
        currentRow += 1;
        currentColumn += 1;

        if (
          currentPiece 
          && verifyAlreadyFilledSquare(
              chessSnapshot,
              currentRow,
              currentColumn,
              currentPiece,
              currentRow - 1,
              currentColumn - 1
        )) {
          break;
        }

        valids.push([currentRow, currentColumn]);
    };

    currentRow = row;
    currentColumn = column;

    while (currentRow !== 1 && currentColumn !== 1) {
        currentRow -= 1;
        currentColumn -= 1;

        if (
          currentPiece 
          && verifyAlreadyFilledSquare(
              chessSnapshot,
              currentRow,
              currentColumn,
              currentPiece,
              currentRow + 1,
              currentColumn + 1
        )) {
          break;
        }

        valids.push([currentRow, currentColumn]);
    };

    return valids.map((arr) => findPosition(arr[0], arr[1]));
  };
};