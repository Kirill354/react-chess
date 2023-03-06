import { Cell } from "../Cell";
import { Colors } from "../Colors";
import { Figure, FigureNames } from "./Figure";

import blackLogo from "../../assets/black-king.png";
import WhiteLogo from "../../assets/white-king.png";

export class King extends Figure {
  constructor(color: Colors, cell: Cell) {
    super(color, cell);
    this.name = FigureNames.KING;
    this.logo = color === Colors.BLACK ? blackLogo : WhiteLogo;
  }

  canMove(target: Cell): boolean {
    if (!super.canMove(target)) return false;

    if (
      Math.abs(target.x - this.cell.x) <= 1 &&
      Math.abs(target.y - this.cell.y) <= 1
    ) {
      return true;
    }

    return false;
  }
}
