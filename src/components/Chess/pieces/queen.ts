import Bishop from './bishop';
import Rook from './rook';

export default class Queen {
  valid (position: number): number[] {
    const bishop = new Bishop();
    const rook = new Rook();

    return [
      ...bishop.valid(position),
      ...rook.valid(position)
    ];
  };
};