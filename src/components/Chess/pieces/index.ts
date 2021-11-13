import Rook from "./rook";
import Knight from './knight'
import Bishop from './bishop';
import Queen from './queen';
import King from './king';

export default class Pieces {
  getRook () {
    return new Rook();
  };

  getKnight () {
    return new Knight();
  };

  getBishop () {
    return new Bishop();
  };

  getQueen () {
    return new Queen();
  };

  getKing () {
    return new King();
  };
};