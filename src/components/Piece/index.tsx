import { StyledPieceSquare } from './styles'

type PieceProps = {
  size?: number;
  pieceType?: string;
  position: number;
  selected?: boolean;
  onClick: () => void;
};

export default function Piece ({
  size,
  pieceType = 'empty',
  position,
  selected,
  onClick
}: PieceProps) {
  return (
    <StyledPieceSquare
      size={size}
      index={position}
      selected={selected}
      onClick={onClick}
    >
      {/*<i className={`fas fa-chess-${pieceType}`}></i>*/}
      {pieceType}
    </StyledPieceSquare>
  );
};