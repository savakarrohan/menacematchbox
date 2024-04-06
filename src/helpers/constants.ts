import { board } from "../interfaces";

export const solvedBoardo: board = [
  ["", "", "x"],
  ["o", "o", "o"],
  ["x", "o", "x"],
];

export const solvedBoardx: board = [
  ["", "", "x"],
  ["o", "x", "o"],
  ["x", "o", "o"],
];

export const unsolvedBoard: board = [
  ["", "", "x"],
  ["o", "", "o"],
  ["x", "o", "x"],
];

export const oTurn: board = [
  ["", "", "o"],
  ["", "x", ""],
  ["", "", ""],
];

export const xTurn: board = [
  ["", "", "o"],
  ["", "x", "o"],
  ["", "", ""],
];

export const solvedDiag: board = [
  ["x", "o", "x"],
  ["o", "x", "o"],
  ["o", "x", "x"],
];
