import Pieces from '../components/Chess/pieces';

export function findValidPositions (type: string | undefined, position: number | undefined, pawnMode: string | undefined): number[] {
  const piecesClass = new Pieces();
  let results: number[] = [];

  if (!type || !position) {
    return [];
  };

  switch (type) {
    case 'rook':
      results = piecesClass.getRook().valid(position);
      break;
    case 'knight':
      results = piecesClass.getKnight().valid(position);
      break;
    case 'bishop':
      results = piecesClass.getBishop().valid(position);
      break;
    case 'queen':
      results = piecesClass.getQueen().valid(position);
      break;
    case 'king':
      results = piecesClass.getKing().valid(position);
      break;
    case 'pawn':
      if (pawnMode) {
        results = piecesClass.getPawn().valid(position, pawnMode);
      };
      break;
    default:
      results = [];
  };

  return results;
};

export function checkIfPositionIsInValidPositions (
  type: string | undefined, 
  lastPosition: number | undefined, 
  newPosition: number | undefined,
  lastPawnMode: string | undefined
): boolean {
  if(!type || !lastPosition || !newPosition) {
    return false;
  };

  let validPositions = findValidPositions(type, lastPosition, lastPawnMode);

  return validPositions.includes(newPosition);
};