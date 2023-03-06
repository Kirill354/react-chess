import React from "react";
import { Cell } from "../models/Cell";

interface CellComponentProps {
  cell: Cell;
  onCellClick: (cell: Cell) => void;
  selected: boolean;
}

const CellComponent: React.FC<CellComponentProps> = ({
  cell,
  selected,
  onCellClick,
}) => {
  return (
    <div
      onClick={() => onCellClick(cell)}
      className={`cell ${cell.color} ${selected && "selected"}`}
      style={{ background: cell.available && cell.figure ? "green" : "" }}
    >
      {cell.available && !cell.figure && <div className="available" />}
      {cell.figure?.logo && (
        <img src={cell.figure.logo} alt={cell.figure.name}></img>
      )}
    </div>
  );
};

export default CellComponent;
