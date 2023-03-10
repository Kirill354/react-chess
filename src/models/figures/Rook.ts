import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-rook.png";
import WhiteLogo from "../../assets/white-rook.png";

export class Rook extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.ROOK;
    this.logo = color === Colors.BLACK ? blackLogo : WhiteLogo;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;
    if (this.cell.isEmptyVertical(target)) return true;
    if (this.cell.isEmptyHorizontal(target)) return true;
    return false;
  }
}
