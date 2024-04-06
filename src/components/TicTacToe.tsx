import React, { useState, useRef } from "react";
import { Checkbox } from "antd";
import { board } from "../interfaces";
import { oTurn, xTurn } from "../helpers";
import Menace from "../menace/menace";

export function TicTacToe() {
  const menaceObj = useRef(new Menace({ name: "simple", weights: [1, 3, 5] }));
  const [gameBoard, setGameBoard] = useState<board>(xTurn);
  const [turn, setTurn] = useState(menaceObj.current.checkMove(gameBoard));

  /**
   * Function to update the board to appropriate state
   * @param rowIndex number representing row
   * @param colIndex number representing column
   */
  const handleCheckboxChange = (rowIndex: number, colIndex: number) => {
    if (!menaceObj.current.checkMove(gameBoard)) {
      const updatedBoard = gameBoard.map((row, rIndex) =>
        row.map((cell, cIndex) =>
          rIndex === rowIndex && cIndex === colIndex
            ? cell === ""
              ? "x"
              : ""
            : cell
        )
      );
      setGameBoard(updatedBoard);
      setTurn(menaceObj.current.checkMove(updatedBoard));
    }
  };

  return (
    <div className="flex justify-center">
      <table className="board large justify-center">
        <tbody>
          {gameBoard.map((row, rowIndex) => (
            <tr key={rowIndex} className="row">
              {row.map((cell, colIndex) => (
                <td
                  key={`${rowIndex}-${colIndex}`}
                  className={`cell p${rowIndex * 3 + colIndex}`}
                >
                  {cell !== "" ? (
                    cell
                  ) : (
                    <Checkbox
                      onChange={() => {
                        handleCheckboxChange(rowIndex, colIndex);
                      }}
                      disabled={turn}
                    />
                  )}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
