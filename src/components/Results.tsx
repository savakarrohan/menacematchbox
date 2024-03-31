import React from "react";
import Menace from "../menace/menace";
import {
  isSolved,
  oTurn,
  solvedBoardo,
  solvedBoardx,
  unsolvedBoard,
  xTurn,
} from "../helpers";

export default function Results() {
  function simpleRun() {
    const a = new Menace({ name: "Simple", weights: [5, 4, 4] });

    return a.checkMove(xTurn) ? "True" : "False";
  }
  return (
    <>
      <div className="min-h-screen">
        <h1>Hello World</h1>
        <p>{simpleRun()}</p>
      </div>
    </>
  );
}