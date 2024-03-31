import React, { useState } from "react";

import { Table, Checkbox } from "antd";
import { board } from "../interfaces";
import { xTurn } from "../helpers";

export function TicTacToe() {
  const [board, setBoard] = useState<board>(xTurn);
  return (
    <>
      <div className="flex justify-center">
        <table className="board large justify-center">
          <tbody>
            <tr>
              <td id="pos0" className="p0">
                {board[0][0] != "" ? board[0][0] : <Checkbox id="0,0" />}
              </td>
              <td id="pos1" className="p1">
                {board[0][1] != "" ? board[0][1] : <Checkbox id="0,1" />}
              </td>
              <td id="pos2" className="p2">
                {board[0][2] != "" ? board[0][2] : <Checkbox id="0,2" />}
              </td>
            </tr>
            <tr>
              <td id="pos3" className="p3">
                {board[1][0] != "" ? board[1][0] : <Checkbox id="1,0" />}
              </td>
              <td id="pos4" className="p4">
                {board[1][1] != "" ? board[1][1] : <Checkbox id="1,1" />}
              </td>
              <td id="pos5" className="p5">
                {board[1][2] != "" ? board[1][2] : <Checkbox id="1,2" />}
              </td>
            </tr>
            <tr>
              <td id="pos6" className="p3">
                {board[2][0] != "" ? board[2][0] : <Checkbox id="2,0" />}
              </td>
              <td id="pos7" className="p4">
                {board[2][1] != "" ? board[2][1] : <Checkbox id="2,1" />}
              </td>
              <td id="pos8" className="p5">
                {board[2][2] != "" ? board[2][2] : <Checkbox id="2,2" />}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
