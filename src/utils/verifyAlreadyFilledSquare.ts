import { findPosition } from "./findPosition";
import { ChessArrayPiece } from "./generateChess";

export function verifyAlreadyFilledSquare (
  chessSnapshot: ChessArrayPiece[],
  tempRow: number,
  tempColumn: number,
  currentPiece: ChessArrayPiece
) {
  // eslint-disable-next-line no-loop-func
  let temporaryPiece: ChessArrayPiece | undefined = chessSnapshot.find(
    piece => piece.position === findPosition(tempRow, tempColumn)
  )
        
  if (currentPiece?.pieceColor === temporaryPiece?.pieceColor) {
    return true;
  } else {
    return false;
  };
};
