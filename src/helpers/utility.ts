import { board } from "../interfaces";

// Function to rotate a board clockwise by 90 degrees
export function rotateBoard(board: board) {
  // Get the dimensions of the board
  const rows = board.length;
  const cols = board[0].length;

  // Create a new board to store the rotated board
  const rotatedBoard = [];

  // Iterate through each column of the original board
  for (let col = 0; col < cols; col++) {
    // Create a new row for the rotated board
    const newRow = [];

    // Iterate through each row of the original board in reverse order
    for (let row = rows - 1; row >= 0; row--) {
      // Add the element from the original board to the new row
      newRow.push(board[row][col]);
    }

    // Add the new row to the rotated board
    rotatedBoard.push(newRow);
  }

  return rotatedBoard;
}