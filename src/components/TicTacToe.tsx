import React from "react";

import { Table, Checkbox } from "antd";

export function TicTacToe() {
  const data = [
    { key: "row1", col1: <Checkbox />, col2: <Checkbox />, col3: <Checkbox /> },
    { key: "row2", col1: <Checkbox />, col2: <Checkbox />, col3: <Checkbox /> },
    { key: "row3", col1: <Checkbox />, col2: <Checkbox />, col3: <Checkbox /> },
  ];
  return (
    <>
      <div className="flex justify-center">
        <table className="board large justify-center">
          <tbody>
            <tr>
              <td id="pos0" className="p0">
                <Checkbox id="1,1" />
              </td>
              <td id="pos1" className="p1">
                <Checkbox id="1,2" />
              </td>
              <td id="pos2" className="p2">
                <Checkbox id="1,3" />
              </td>
            </tr>
            <tr>
              <td id="pos3" className="p3">
                <Checkbox id="2,1" />
              </td>
              <td id="pos4" className="p4">
                <Checkbox id="2,1" />
              </td>
              <td id="pos5" className="p5">
                <Checkbox id="2,1" />
              </td>
            </tr>
            <tr>
              <td id="pos6" className="p6">
                <Checkbox id="3,1" />
              </td>
              <td id="pos7" className="p7">
                <Checkbox id="3,1" />
              </td>
              <td id="pos8" className="p8">
                <Checkbox id="3,1" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
}
