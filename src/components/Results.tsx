import React from "react";
import Menace from "../menace/menace";
import {
  isSolved,
  mirrorAboutFirstDiagonal,
  mirrorAboutSecondDiagonal,
  mirrorHBoard,
  oTurn,
  solvedBoardo,
  solvedBoardx,
  solvedDiag,
  unsolvedBoard,
  xTurn,
} from "../helpers";

export default function Results() {
  function simpleRun() {
    const a = new Menace({ name: "Simple", weights: [5, 4, 4] });

    console.log("mirrored", mirrorAboutFirstDiagonal(solvedDiag));

    a.statesCreate();
    return isSolved(solvedDiag) ? "True" : "False";
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
