import { ChessArrayPiece } from '../utils/generateChess';
import Bishop from './bishop';
import Rook from './rook';

export default class Queen {
  valid (position: number, chessSnapshot: ChessArrayPiece[]): number[] {
    const bishop = new Bishop();
    const rook = new Rook();

    return [
      ...bishop.valid(position, chessSnapshot),
      ...rook.valid(position, chessSnapshot)
    ];
  };
};