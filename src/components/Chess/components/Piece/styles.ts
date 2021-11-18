import styled from "styled-components";

import { squareColor } from "../../utils/squareColor"

interface StyledPieceSquareProps {
  size?: number;
  index: number;
  selected?: boolean;
  valid?: boolean;
  pieceType?: string;
  pieceColor?: string;
};

export const StyledPieceSquare = styled.button<StyledPieceSquareProps>`
  width: ${props => props.size ? `${props.size}px` : '12.5%'};
  height: ${props => props.size ? `${props.size}px` : '12.5%'};

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${props => squareColor(props.index)};
  border: 0;

  font-size: 2.9rem;

  transition: .2s;

  ${props => props.pieceColor && `color: ${props.pieceColor};`}

  ${props => props.selected && 'filter: brightness(1.5);'}

  ${props => props.valid && `filter: brightness(0.7);`}

  ${props => (!!props.pieceType && props.pieceType !== 'empty') && 'cursor: pointer;'}

  ${(props) => {
    if (props.pieceColor) {
      if (props.pieceColor === 'black') {
        return `
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #DDD;
        `;
      } else if (props.pieceColor === 'white') {
        return `
          -webkit-text-stroke-width: 2px;
          -webkit-text-stroke-color: #000;
        `;
      } else {
        return '';
      }
    }
  }}

  &:hover {
    filter: brightness(1.2);
  }

  @media (max-width: 768px) {
    font-size: 6vw;
  }
`;