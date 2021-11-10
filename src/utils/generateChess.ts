import { findRow } from "./findRow";
import { findColumn } from "./findColumn";

export type ChessArrayPiece = {
  type: string;
  position: number;
  selected?: boolean;
};

export function generateChess (): ChessArrayPiece[] {
  function pawnPiece (chess: ChessArrayPiece[], position: number) {
    chess.push({
      type: 'pawn',
      position: position
    });
  };

  function otherPiece (chess: ChessArrayPiece[], column: number, position: number) {
    let piecesRow = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    
    chess.push({
      type: piecesRow[column - 1],
      position: position,
    });
  };

  function emptySquare (chess: ChessArrayPiece[], position: number) {
    chess.push({
      type: 'empty',
      position: position,
    });
  };
  
  let chess = [] as ChessArrayPiece[];

  let i = 1;
  while (i <= 64) {
    let row = findRow(i);
    let column = findColumn(i);

    switch (row) {
      case 2:
      case 7:
        pawnPiece(chess, i);
        break;
      case 1:
      case 8:
        otherPiece(chess, column, i);
        break;
      default:
        emptySquare(chess, i);
    };

    i++;
  };

  return chess;
};