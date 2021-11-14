import { useState, useEffect, useCallback } from 'react';

import Piece from '../Piece';
import { Board } from './styles';
import { generateChess } from '../../utils/generateChess';
import { checkIfPositionIsInValidPositions } from '../../utils/findValidPositions';

type PieceSelected = {
  type: string;
  position: number;
  pieceColor?: string;
  pawnMode?: string;
};

type Move = {
  lastSelected?: PieceSelected;
  newSelected?: PieceSelected;
};

export default function Chess () {
  const [chessArray, setChessArray] = useState(generateChess());
  const [move, setMove] = useState({} as Move);

  const checkValidPositions = useCallback((n: number) => {
    let currentChess = chessArray;

    let newChess = currentChess.map(piece => ({
      ...piece,
      valid: checkIfPositionIsInValidPositions(
        currentChess[n - 1].type,
        currentChess[n - 1].position,
        piece.position,
        currentChess[n - 1].pawnMode,
        chessArray
      )
    }));

    setChessArray(newChess);
  }, [chessArray]);
  
  const cleanChessSelectedAndValidPieces = useCallback(() => {
    let currentChess = chessArray;

    let newChess = currentChess.map((piece) => ({
      ...piece,
      selected: false,
      valid: false
    }));

    setChessArray(newChess);
  }, [chessArray]);

  const execMove = useCallback(() => {

    let currentChess = chessArray;

    // Validar aqui posteriormente

    if(
      move.lastSelected 
      && move.newSelected
      && checkIfPositionIsInValidPositions(
        move.lastSelected.type,
        move.lastSelected.position,
        move.newSelected.position,
        move.lastSelected.pawnMode,
        chessArray
      )
    ) {
      currentChess[move.newSelected.position - 1].type = move.lastSelected.type
      currentChess[move.newSelected.position - 1].pieceColor = move.lastSelected.pieceColor
      currentChess[move.newSelected.position - 1].pawnMode = move.lastSelected.pawnMode

      currentChess[move.lastSelected.position - 1].type = 'empty';
      currentChess[move.lastSelected.position - 1].pieceColor = undefined;
      currentChess[move.lastSelected.position - 1].pawnMode = undefined;

      let newChess = currentChess.map(obj => ({ ...obj }));
      setChessArray(newChess);
      setMove({});
      cleanChessSelectedAndValidPieces();
    };
  }, [chessArray, move.lastSelected, move.newSelected, cleanChessSelectedAndValidPieces]);

  function selectPiece (pos: number, type: string) {
    if (!move.lastSelected && type === 'empty') {
      return;
    };

    let currentChess = chessArray;
    currentChess[pos - 1].selected = true;

    let newChess = currentChess.map(obj => ({ ...obj }));
    
    if (!!move.lastSelected) {
      setMove((last) => ({
        ...last,
        newSelected: newChess[pos - 1]
      }));

      return;
    };

    setChessArray(newChess);
    setMove({
      lastSelected: newChess[pos - 1]
    });

    if (!move.lastSelected && !move.newSelected) {
      checkValidPositions(newChess[pos - 1].position);
    };
  };

  useEffect(() => {
    if (move.lastSelected && move.newSelected) {

      if (move.lastSelected.position === move.newSelected.position) {
        cleanChessSelectedAndValidPieces();
        setMove({});
        return;
      };

      if (move.lastSelected.pieceColor === move.newSelected.pieceColor) {
        cleanChessSelectedAndValidPieces();
        setMove({});
        return;
      };

      execMove();
    };
  }, [move, execMove, cleanChessSelectedAndValidPieces]);

  console.log('render!')

  return (
    <Board size={600}>
      {
        chessArray.map(piece => <Piece
                                  pieceType={piece.type}
                                  pieceColor={piece.pieceColor}
                                  pawnMode={piece.pawnMode}
                                  position={piece.position}
                                  selected={piece.selected}
                                  valid={piece.valid}
                                  key={`chess-piece-${piece.type}-${piece.position}`}
                                  onClick={() => selectPiece(piece.position, piece.type)}
                                />)
      }
    </Board>
  );
};