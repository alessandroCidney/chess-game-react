import { StyledPieceSquare } from './styles'

type PieceProps = {
  size?: number;
  pieceType?: string;
  position: number;
  selected?: boolean;
  valid?: boolean;
  onClick: () => void;
  pieceColor?: string;
  pawnMode?: string;
};

export default function Piece ({
  size,
  pieceType = 'empty',
  position,
  selected,
  onClick,
  valid,
  pieceColor,
  pawnMode
}: PieceProps) {
  return (
    <StyledPieceSquare
      size={size}
      index={position}
      selected={selected}
      valid={valid}
      onClick={onClick}
      pieceType={pieceType}
      pieceColor={pieceColor}
    >
      <i className={`fas fa-chess-${pieceType}`}></i>
    </StyledPieceSquare>
  );
};