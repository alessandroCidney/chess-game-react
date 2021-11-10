import { useState, useEffect, useCallback } from 'react';

import Piece from '../Piece';
import { Board } from './styles';
import { generateChess } from '../../utils/generateChess';

import Pieces from './pieces';

type PieceSelected = {
  type: string;
  position: number;
};

type Move = {
  lastSelected?: PieceSelected;
  newSelected?: PieceSelected;
};

export default function Chess () {
  const [chessArray, setChessArray] = useState(generateChess());
  const [move, setMove] = useState({} as Move);

  const checkValidPositions = useCallback((n: number) => {
    const piecesClass = new Pieces();

    let currentChess = chessArray;
    let validPositions = piecesClass.getRook().valid(n);

    let newChess = currentChess.map(piece => ({
      ...piece,
      valid: validPositions.includes(piece.position)
    }));

    setChessArray(newChess);
  }, [chessArray]);

  const execMove = useCallback(() => {
    function cleanChessSelectedPieces () {
      let currentChess = chessArray;
  
      let newChess = currentChess.map((piece) => ({
        ...piece,
        selected: false
      }));
  
      setChessArray(newChess);
    };
    
    let currentChess = chessArray;

    // Validar aqui posteriormente

    if(move.lastSelected && move.newSelected) {
      currentChess[move.newSelected.position - 1].type = move.lastSelected.type
      currentChess[move.lastSelected.position - 1].type = 'empty';

      let newChess = currentChess.map(obj => ({ ...obj }));
      setChessArray(newChess);
      setMove({});
      cleanChessSelectedPieces();
    };
  }, [chessArray, move.lastSelected, move.newSelected]);

  function selectPiece (pos: number) {
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
      execMove();
    };
  }, [move, execMove, checkValidPositions]);

  console.log('render!')

  return (
    <Board size={600}>
      {
        chessArray.map(piece => <Piece
                                  pieceType={piece.type}
                                  position={piece.position}
                                  selected={piece.selected}
                                  valid={piece.valid}
                                  key={`chess-piece-${piece.type}-${piece.position}`}
                                  onClick={() => selectPiece(piece.position)}
                                />)
      }
    </Board>
  );
};