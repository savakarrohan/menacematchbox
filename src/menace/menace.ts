import * as _ from "lodash";

import {
  isSolved,
  mirrorAboutFirstDiagonal,
  mirrorAboutSecondDiagonal,
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
  public states: board[] = [];
  constructor(Options: IMenaceOptions) {
    this._weights = Options.weights;
    this._name = Options.name;
    this.statesCreate();
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
   * A constructor function to prepare all the states
   */
  public statesCreate() {
    const states: board[] = [];
    const emptyBoard: board = [
      ["", "", ""],
      ["", "", ""],
      ["", "", ""],
    ];

    // For the putting 1o
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

    // For putting 1x 1o
    // Let's loop through the firstStates created
    const firstStates = _.cloneDeep(states);
    let secondStates: board[] = [];
    for (let stateNum = 0; stateNum < firstStates.length; stateNum++) {
      for (let i = 0; i < firstStates[stateNum].length; i++) {
        for (let j = 0; j < firstStates[stateNum][i].length; j++) {
          let stateBoard = _.cloneDeep(firstStates[stateNum]);
          if (stateBoard[i][j] !== "o") {
            stateBoard[i][j] = "x";
            if (!this.checkInStates(states, stateBoard)) {
              states.push(stateBoard);
              secondStates.push(stateBoard);
            }
          }
        }
      }
    }

    // For putting 1x 2o
    // Let's loop through the secondStates created
    const secondStatesCopy = _.cloneDeep(secondStates);
    let thirdStates: board[] = [];
    for (let stateNum = 0; stateNum < secondStatesCopy.length; stateNum++) {
      for (let i = 0; i < secondStatesCopy[stateNum].length; i++) {
        for (let j = 0; j < secondStatesCopy[stateNum][i].length; j++) {
          // Create a newBoard object based from emptyBoard
          let newBoard = _.cloneDeep(secondStatesCopy[stateNum]);
          if (newBoard[i][j] != "x") {
            newBoard[i][j] = "o";
          }
          // If not included in states add this to states
          if (!this.checkInStates(states, newBoard)) {
            states.push(newBoard);
            thirdStates.push(newBoard);
          }
        }
      }
    }

    // For putting 2x 2o
    // Let's loop through third states created
    const thirdStatesCopy = _.cloneDeep(thirdStates);
    let fourthStates: board[] = [];
    for (let stateNum = 0; stateNum < thirdStatesCopy.length; stateNum++) {
      for (let i = 0; i < thirdStatesCopy[stateNum].length; i++) {
        for (let j = 0; j < thirdStatesCopy[stateNum][i].length; j++) {
          let stateBoard = _.cloneDeep(thirdStatesCopy[stateNum]);
          if (stateBoard[i][j] !== "o") {
            stateBoard[i][j] = "x";
            if (!this.checkInStates(states, stateBoard)) {
              states.push(stateBoard);
              fourthStates.push(stateBoard);
            }
          }
        }
      }
    }

    // For putting 2x 3o
    // Let's loop through fourth states created
    const fourthStatesCopy = _.cloneDeep(fourthStates);
    let fifthStates: board[] = [];
    for (let stateNum = 0; stateNum < fourthStatesCopy.length; stateNum++) {
      for (let i = 0; i < fourthStatesCopy[stateNum].length; i++) {
        for (let j = 0; j < fourthStatesCopy[stateNum][i].length; j++) {
          // Create a newBoard object based from emptyBoard
          let newBoard = _.cloneDeep(fourthStatesCopy[stateNum]);
          if (newBoard[i][j] != "x") {
            newBoard[i][j] = "o";
          }
          // If not included in states add this to states
          if (!this.checkInStates(states, newBoard)) {
            states.push(newBoard);
            fifthStates.push(newBoard);
          }
        }
      }
    }

    // For putting 3x 3o
    // Let's loop through fifth states created
    const fifthStatesCopy = _.cloneDeep(fifthStates);
    let sixthStates: board[] = [];
    for (let stateNum = 0; stateNum < fifthStatesCopy.length; stateNum++) {
      for (let i = 0; i < fifthStatesCopy[stateNum].length; i++) {
        for (let j = 0; j < fifthStatesCopy[stateNum][i].length; j++) {
          let stateBoard = _.cloneDeep(fifthStatesCopy[stateNum]);
          if (stateBoard[i][j] !== "o") {
            stateBoard[i][j] = "x";
            if (!this.checkInStates(states, stateBoard)) {
              states.push(stateBoard);
              sixthStates.push(stateBoard);
            }
          }
        }
      }
    }

    // For putting 3x 4o
    // Let's loop through fourth states created
    const sixthStatesCopy = _.cloneDeep(sixthStates);
    let seventhStates: board[] = [];
    for (let stateNum = 0; stateNum < sixthStatesCopy.length; stateNum++) {
      for (let i = 0; i < sixthStatesCopy[stateNum].length; i++) {
        for (let j = 0; j < sixthStatesCopy[stateNum][i].length; j++) {
          // Create a newBoard object based from emptyBoard
          let newBoard = _.cloneDeep(sixthStatesCopy[stateNum]);
          if (newBoard[i][j] != "x") {
            newBoard[i][j] = "o";
          }
          // If not included in states add this to states
          if (!this.checkInStates(states, newBoard)) {
            states.push(newBoard);
            seventhStates.push(newBoard);
          }
        }
      }
    }

    this.states = states;
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
          if (!this.checkRotationInStates(states, mirV)) {
            let mirD1 = mirrorAboutFirstDiagonal(newBoard);
            if (!this.checkRotationInStates(states, mirD1)) {
              let mirD2 = mirrorAboutSecondDiagonal(newBoard);
              if (!this.checkRotationInStates(states, mirD2)) {
                if (!isSolved(newBoard)) {
                  return false;
                }
              }
            }
          }
        }
      }
    }
    return true;
  }
}
