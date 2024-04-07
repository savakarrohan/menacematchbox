import * as _ from "lodash";

import { isSolved, rotateBoard, singleo } from "../helpers";
import { board, ele } from "../interfaces";

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
   * checkMove returns True if it is menace's (o) turn to play
   */
  public checkMove(board: board): boolean {
    let count = 0;
    for (let i = 0; i < board.length; i++) {
      // i represents row
      for (let j = 0; j < board[i].length; j++) {
        // j represents column
        if (board[i][j] == "o" || board[i][j] == "x") {
          count++;
        }
      }
    }
    return count % 2 == 0;
  }

  /**
   * statesCreate
  
  */
  public statesCreate() {
    const states: board[] = [];
    const emptyBoard: board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    // For the first move only 1 x
    for (let i = 0; i < emptyBoard.length; i++) {
      for (let j = 0; j < emptyBoard[i].length; j++) {
        // Create a newBoard object based from emptyBoard
        let newBoard = _.cloneDeep(emptyBoard);
        newBoard[i][j] = "o";

        console.log(states.some((state) => _.isEqual(state, singleo)));

        // If not included in states add this
        if (!states.some((state) => _.isEqual(state, newBoard))) {
          let rota1 = rotateBoard(newBoard);
          console.log("rota1", rota1);
          if (!states.some((state) => _.isEqual(state, rota1))) {
            let rota2 = rotateBoard(rota1);
            console.log("rota2", rota2);
            if (!states.some((state) => _.isEqual(state, rota2))) {
              let rota3 = rotateBoard(rota2);
              console.log("rota3", rota3);
              if (!states.some((state) => _.isEqual(state, rota3))) {
                states.push(newBoard);
              }
            }
          }
        }
      }
    }

    // logging
    console.log("states", states);
  }

  private _weights;
  private _name;
}
