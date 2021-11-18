import { findPosition } from "../utils/findPosition";
import { findColumn } from "../utils/findColumn";
import { findRow } from "../utils/findRow";
import { cleanInvalidPieces } from "../utils/cleanInvalidPieces";
import { ChessArrayPiece } from "../utils/generateChess";

function checkFilled (
  chess: ChessArrayPiece[],
  positions: number[][],
  current: ChessArrayPiece
): number[][] {
  const results: number[][] = [];
  
  let reallyPositions = positions.map(position => findPosition(position[0], position[1]))

  reallyPositions.forEach((position, index) => {
    if (chess[position - 1].pieceColor !== current.pieceColor) {
      results.push(positions[index]);
    }
  });

  return results;
};

export default class Knight {
  valid (position: number, chessSnapshot: ChessArrayPiece[]): number[]{
    let valids = [];

    const row = findRow(position);
    const column = findColumn(position);

    const currentPiece = chessSnapshot[position - 1];

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
    valids = checkFilled(chessSnapshot, valids, currentPiece);

    return valids.map((arr) => findPosition(arr[0], arr[1]));
  };
};