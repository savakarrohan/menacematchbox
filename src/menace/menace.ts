import * as _ from "lodash";

import {
  isSolved,
  mirrorHBoard,
  mirrorVBoard,
  rotateBoard,
  singleo,
} from "../helpers";
import { board, ele } from "../interfaces";

interface IMenaceOptions {
  weights: number[];
  name: string;
}

export default class Menace {
  private _weights;
  private _name;
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

        // If not included in states add this to states
        if (!this.checkInStates(states, newBoard)) {
          states.push(newBoard);
        }
      }
    }

    // For the second move 1x 1o
    // Let's loop through the firstStates created
    const firstStates = _.cloneDeep(states);
    for (let stateNum = 0; stateNum < firstStates.length; stateNum++) {
      for (let i = 0; i < firstStates[stateNum].length; i++) {
        for (let j = 0; j < firstStates[stateNum][i].length; j++) {
          let stateBoard = _.cloneDeep(firstStates[stateNum]);
          if (stateBoard[i][j] !== "o") {
            stateBoard[i][j] = "x";
            if (!this.checkInStates(states, stateBoard)) {
              states.push(stateBoard);
            }
          }
        }
      }
    }

    // logging
    console.log("states", states);
  }

  private checkRotationInStates(states: board[], newBoard: board) {
    if (!states.some((state) => _.isEqual(state, newBoard))) {
      let rota1 = rotateBoard(newBoard);
      // console.log("rota1", rota1);
      if (!states.some((state) => _.isEqual(state, rota1))) {
        let rota2 = rotateBoard(rota1);
        // console.log("rota2", rota2);
        if (!states.some((state) => _.isEqual(state, rota2))) {
          let rota3 = rotateBoard(rota2);
          // console.log("rota3", rota3);
          if (!states.some((state) => _.isEqual(state, rota3))) {
            return false;
          }
        }
      }
    }
    return true;
  }

  private checkMirrorInStates(states: board[], newBoard: board) {
    // First check if it is present
    if (!states.some((state) => _.isEqual(state, newBoard))) {
      // Check if mirrorH is present
      let mirH = mirrorHBoard(newBoard);
      if (!states.some((state) => _.isEqual(state, mirH))) {
        // Check if mirrorV is present in state
        let mirV = mirrorVBoard(newBoard);
        if (!states.some((state) => _.isEqual(state, mirV))) {
          return false;
        }
      }
    }
    return true;
  }

  private checkInStates(states: board[], newBoard: board) {
    if (!this.checkRotationInStates(states, newBoard)) {
      if (!this.checkMirrorInStates(states, newBoard)) {
        let mirH = mirrorHBoard(newBoard);
        if (!this.checkRotationInStates(states, mirH)) {
          let mirV = mirrorVBoard(newBoard);
          if (!this.checkRotationInStates(states, mirV)) return false;
        }
      }
    }
    return true;
  }
}
