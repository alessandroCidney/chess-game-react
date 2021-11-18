import { findPosition } from "../utils/findPosition";
import { findColumn } from "../utils/findColumn";
import { findRow } from "../utils/findRow";
import { cleanInvalidPieces } from "../utils/cleanInvalidPieces";
import { ChessArrayPiece } from "../utils/generateChess";

export default class Pawn {
  valid (position: number, pawnMode: string, chessSnapshot: ChessArrayPiece[]): number[] {
    let valids = [];

    let row = findRow(position);
    let column = findColumn(position);

    let currentPiece = chessSnapshot[findPosition(row, column) - 1];
    
    if (pawnMode === 'bottom-to-top') {
      let tempPosition = findPosition(row - 1, column);

      let possibleAtackPositions = {
        left: findPosition(row - 1, column - 1),
        right: findPosition(row - 1, column + 1)
      };

      if (chessSnapshot[tempPosition-1].type === 'empty') {
        valids.push(
          [row - 1, column]
        );
  
        if (row === 7) {
          valids.push(
            [row - 2, column]
          );
        };
      };

      if (
        chessSnapshot[possibleAtackPositions.left - 1].type !== 'empty'
        && chessSnapshot[possibleAtackPositions.left - 1].pieceColor !== currentPiece.pieceColor
      ) {
        valids.push(
          [row - 1, column - 1]
        );
      };

      if (
        chessSnapshot[possibleAtackPositions.right - 1].type !== 'empty'
        && chessSnapshot[possibleAtackPositions.right - 1].pieceColor !== currentPiece.pieceColor
      ) {
        valids.push(
          [row - 1, column + 1]
        );
      };
    } else if (pawnMode === 'from-top-to-bottom') {
      let tempPosition = findPosition(row + 1, column);

      let possibleAtackPositions = {
        left: findPosition(row + 1, column - 1),
        right: findPosition(row + 1, column + 1)
      };

      if (chessSnapshot[tempPosition-1].type === 'empty') {
        valids.push(
          [row + 1, column]
        );
  
        if (row === 2) {
          valids.push(
            [row + 2, column]
          );
        };
      };

      if (
        chessSnapshot[possibleAtackPositions.left - 1].type !== 'empty'
        && chessSnapshot[possibleAtackPositions.left - 1].pieceColor !== currentPiece.pieceColor
      ) {
        valids.push(
          [row + 1, column - 1]
        );
      };

      if (
        chessSnapshot[possibleAtackPositions.right - 1].type !== 'empty'
        && chessSnapshot[possibleAtackPositions.right - 1].pieceColor !== currentPiece.pieceColor
      ) {
        valids.push(
          [row + 1, column + 1]
        );
      };
    };

    valids = cleanInvalidPieces(valids);

    return valids.map((arr) => findPosition(arr[0], arr[1]));
  };
};