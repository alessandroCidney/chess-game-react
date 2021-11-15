import { findRow } from "./findRow";
import { findColumn } from "./findColumn";

export type ChessArrayPiece = {
  type: string;
  position: number;
  selected?: boolean;
  valid?: boolean;
  pieceColor?: string;
  pawnMode?: string;
};

export function generateChess (startsWith: string = 'whitePieces'): ChessArrayPiece[] {
  function pawnPiece (chess: ChessArrayPiece[], position: number, pawnMode: string, pieceColor: string) {
    chess.push({
      type: 'pawn',
      position: position,
      pieceColor: pieceColor,
      pawnMode: pawnMode
    });
  };

  function otherPiece (chess: ChessArrayPiece[], column: number, position: number, pieceColor: string) {
    let piecesRow = ['rook', 'knight', 'bishop', 'queen', 'king', 'bishop', 'knight', 'rook'];
    
    chess.push({
      type: piecesRow[column - 1],
      position: position,
      pieceColor: pieceColor
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
        pawnPiece(chess, i, 'from-top-to-bottom', (startsWith === 'whitePieces' ? 'black' : 'white'));
        break;
      case 7:
        pawnPiece(chess, i, 'bottom-to-top', (startsWith === 'whitePieces' ? 'white' : 'black'));
        break;
      case 1:
        otherPiece(chess, column, i, (startsWith === 'whitePieces' ? 'black' : 'white'));
        break;
      case 8:
        otherPiece(chess, column, i, (startsWith === 'whitePieces' ? 'white' : 'black'));
        break;
      default:
        emptySquare(chess, i);
    };

    i++;
  };

  return chess;
};