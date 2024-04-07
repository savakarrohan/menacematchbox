import { board, ele, row } from "../interfaces";

// Function to rotate a board clockwise by 90 degrees
export function rotateBoard(board: board): board {
  // Get the dimensions of the board
  const rows = board.length;
  const cols = board[0].length;

  // Create a new board to store the rotated board
  const rotatedBoard: board = [];

  // Iterate through each column of the original board
  for (let col = 0; col < cols; col++) {
    // Create a new row for the rotated board
    const newRow: row = [];

    // Iterate through each row of the original board in reverse order
    for (let row = rows - 1; row >= 0; row--) {
      // Add the element from the original board to the new row
      newRow.push(board[row][col] as ele);
    }

    // Add the new row to the rotated board
    rotatedBoard.push(newRow);
  }

  return rotatedBoard;
}

/**
 *
 * @param board Board to be mirrored
 * @returns The horizontally mirrored board
 */
export function mirrorHBoard(board: board): board {
  return board.map((row) => row.slice().reverse());
}

/**
 *
 * @param board Board to be mirrored
 * @returns The vertically mirrored board
 */
export function mirrorVBoard(board: board): board {
  return board.slice().reverse();
}

/**
 * A function to mirror about Second diagonal
 * @param board Board to be mirrored
 * @returns The antiDiagonal mirrored
 */
export function mirrorAboutSecondDiagonal(board: board) {
  return board.map((row, rowIndex) =>
    row.map(
      (_, colIndex) =>
        board[board.length - colIndex - 1][board.length - rowIndex - 1]
    )
  );
}

// Function to mirror a board about the first diagonal (main diagonal)
export function mirrorAboutFirstDiagonal(board: board) {
  return board.map((row, rowIndex) =>
    row.map((_, colIndex) => board[colIndex][rowIndex])
  );
}
