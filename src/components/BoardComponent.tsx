import React, { useEffect, useState } from "react";
import { Board } from "../models/Board";
import { Cell } from "../models/Cell";
import { Player } from "../models/Player";
import CellComponent from "./CellComponent";

interface BoardComponentProps {
  board: Board;
  setBoard: (board: Board) => void;
  currentPlayer: Player | null;
  swapPlayer: () => void;
}

const BoardComponent: React.FC<BoardComponentProps> = ({
  board,
  setBoard,
  currentPlayer,
  swapPlayer,
}) => {
  const [selectedCell, setSelectedCell] = useState<Cell | null>(null);

  useEffect(() => {
    highLightCells();
  }, [selectedCell]);

  const highLightCells = () => {
    board.highLightCells(selectedCell);
    updateBoard();
  };

  const updateBoard = () => {
    const newBoard = board.getCopyBoard();
    setBoard(newBoard);
  };

  const onCellClick = (cell: Cell) => {
    if (
      selectedCell &&
      selectedCell !== cell &&
      selectedCell.figure?.canMove(cell)
    ) {
      selectedCell.moveFigure(cell);
      swapPlayer();
      setSelectedCell(null);
    } else {
      if (cell.figure?.color === currentPlayer?.color) {
        setSelectedCell(cell);
      }
    }
  };

  return (
    <div>
      <h3 style={{ marginBottom: "10px" }}>
        Current player: {currentPlayer?.color}
      </h3>
      <div className="board">
        {board.cells.map((row, index) => (
          <React.Fragment key={index}>
            {row.map((cell) => (
              <CellComponent
                key={cell.id}
                cell={cell}
                onCellClick={onCellClick}
                selected={
                  selectedCell?.x === cell.x && selectedCell?.y === cell.y
                }
              />
            ))}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};

export default BoardComponent;
