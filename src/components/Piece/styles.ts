import styled from "styled-components";

import { squareColor } from "../../utils/squareColor"

interface StyledPieceSquareProps {
  size?: number;
  index: number;
  selected?: boolean;
};

export const StyledPieceSquare = styled.button<StyledPieceSquareProps>`
  width: ${props => props.size ? `${props.size}px` : '12.5%'};
  height: ${props => props.size ? `${props.size}px` : '12.5%'};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => squareColor(props.index)};
  border: 0;

  font-size: 1.5rem;

  ${props => props.selected && 'filter: brightness(1.5);'}

  &:hover {
    filter: brightness(1.2);
  }
`;