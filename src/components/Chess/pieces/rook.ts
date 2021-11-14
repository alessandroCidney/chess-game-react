import { findPosition } from "../../../utils/findPosition";
import { findColumn } from "../../../utils/findColumn";
import { findRow } from "../../../utils/findRow";
import { ChessArrayPiece } from "../../../utils/generateChess";

export default class Rook {
  valid (position: number, chessSnapshot: ChessArrayPiece[]): number[] {
    let valids = [] as number[][];

    const row = findRow(position);
    const column = findColumn(position);
    let currentPiece = chessSnapshot.find(piece => piece.position === position);

    let currentRow = row;
    let currentColumn = column;
    let temporaryPiece: ChessArrayPiece | undefined;

    while (currentRow !== 1) {
        currentRow -= 1;

        // eslint-disable-next-line no-loop-func
        temporaryPiece = chessSnapshot.find(piece => piece.position === findPosition(currentRow, currentColumn))
        
        if (currentPiece?.pieceColor === temporaryPiece?.pieceColor) {
          break;
        };

        valids.push([currentRow, currentColumn]);
    };

    currentRow = row;

    while (currentRow !== 8) {
        currentRow += 1;

        // eslint-disable-next-line no-loop-func
        temporaryPiece = chessSnapshot.find(piece => piece.position === findPosition(currentRow, currentColumn))
        
        if (currentPiece?.pieceColor === temporaryPiece?.pieceColor) {
          break;
        };

        valids.push([currentRow, currentColumn]);
    };

    currentRow = row;

    while (currentColumn !== 1) {
        currentColumn -= 1;

        // eslint-disable-next-line no-loop-func
        temporaryPiece = chessSnapshot.find(piece => piece.position === findPosition(currentRow, currentColumn))
        
        if (currentPiece?.pieceColor === temporaryPiece?.pieceColor) {
          break;
        };

        valids.push([currentRow, currentColumn]);
    };

    currentColumn = column;

    while (currentColumn !== 8) {
        currentColumn += 1;

        // eslint-disable-next-line no-loop-func
        temporaryPiece = chessSnapshot.find(piece => piece.position === findPosition(currentRow, currentColumn))
        
        if (currentPiece?.pieceColor === temporaryPiece?.pieceColor) {
          break;
        };

        valids.push([currentRow, currentColumn]);
    };

    return valids.map((arr) => findPosition(arr[0], arr[1]));
  };
};