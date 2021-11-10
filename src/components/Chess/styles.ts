import styled from "styled-components";

interface BoardProps {
  size?: number;
};

export const Board = styled.div<BoardProps>`
  width: ${props => props.size ? `${props.size}px` : '300px'};
  height: ${props => props.size ? `${props.size}px` : '300px'};

  border: 1px solid #CECECE;

  display: flex;
  align-items: flex-start;
  justify-content: flex-start;
  flex-wrap: wrap;
`;