import Rook from "./rook";
import Knight from './knight'
import Bishop from './bishop';

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
};