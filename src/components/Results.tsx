import React from "react";
import Menace from "../menace/menace";
import {
  isSolved,
  solvedBoardo,
  solvedBoardx,
  unsolvedBoard,
} from "../helpers";

export default function Results() {
  function simpleRun() {
    const a = new Menace({ name: "Simple", weights: [5, 4, 4] });

    return isSolved(unsolvedBoard) ? "True" : "False";
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
