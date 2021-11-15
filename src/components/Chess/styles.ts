import styled from "styled-components";

interface BoardProps {
  size?: number;
};

export const Board = styled.div<BoardProps>`
  width: 100%;
  max-width: ${props => props.size ? `${props.size}px` : '300px'};
  height: 0;
  padding-bottom: min(100%, ${props => props.size ? `${props.size}px` : '300px'});

  position: relative;

  div.wrapper {
    position: absolute;

    border: 1px solid #CECECE;

    width: 100%;
    height: 100%;

    max-width: ${props => props.size ? `${props.size}px` : '300px'};
    max-height: ${props => props.size ? `${props.size}px` : '300px'};

    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-wrap: wrap;
  }
`;