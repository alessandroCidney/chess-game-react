import { findPosition } from "./findPosition";
import { ChessArrayPiece } from "./generateChess";

export function verifyAlreadyFilledSquare (
  chessSnapshot: ChessArrayPiece[],
  tempRow: number,
  tempColumn: number,
  currentPiece: ChessArrayPiece,
  lastRow: number,
  lastColumn: number
) {
  // eslint-disable-next-line no-loop-func
  let temporaryPiece: ChessArrayPiece | undefined = chessSnapshot.find(
    piece => piece.position === findPosition(tempRow, tempColumn)
  );

  let lastTemporaryPiece: ChessArrayPiece | undefined = chessSnapshot.find(
    piece => piece.position === findPosition(lastRow, lastColumn)
  );

  let squareFilledWithDifferentColorPiece = (
    (!!lastTemporaryPiece?.pieceColor && lastTemporaryPiece?.pieceColor !== currentPiece.pieceColor)
    && (!!temporaryPiece?.pieceColor && temporaryPiece?.pieceColor !== currentPiece.pieceColor)
  );

  if (!squareFilledWithDifferentColorPiece) {
    squareFilledWithDifferentColorPiece = (
      (!!lastTemporaryPiece?.pieceColor && lastTemporaryPiece?.pieceColor !== currentPiece.pieceColor)
      && !temporaryPiece?.pieceColor
    );
  };
        
  if (
    currentPiece?.pieceColor === temporaryPiece?.pieceColor
    || squareFilledWithDifferentColorPiece  
  ) {
    return true;
  } else {
    return false;
  };
};
