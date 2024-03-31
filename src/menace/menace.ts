import { board } from "../interfaces";

interface IMenaceOptions {
  weights: number[];
  name: string;
}

export default class Menace {
  constructor(Options: IMenaceOptions) {
    this._weights = Options.weights;
    this._name = Options.name;
  }

  /**
   * checkMove
   */
  public checkMove(board: board) {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
      // i represents row
      for (let j = 0; j < board[i].length; j++) {
        // j represents column
        if (board[i][j] == "x") {
          count++;
        }
      }
    }
    return count;
  }

  private _weights;
  private _name;
}
