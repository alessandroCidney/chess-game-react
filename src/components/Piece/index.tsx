import { StyledPieceSquare } from './styles'

type PieceProps = {
  size?: number;
  pieceType?: string;
  position: number;
  selected?: boolean;
  valid?: boolean;
  onClick: () => void;
};

export default function Piece ({
  size,
  pieceType = 'empty',
  position,
  selected,
  onClick,
  valid
}: PieceProps) {
  return (
    <StyledPieceSquare
      size={size}
      index={position}
      selected={selected}
      valid={valid}
      onClick={onClick}
      pieceType={pieceType}
    >
      <i className={`fas fa-chess-${pieceType}`}></i>
    </StyledPieceSquare>
  );
};