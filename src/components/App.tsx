import React from "react";

import MENACEImage from "../style/images/01MatthewScroggsMenace.png";
import { Introduction } from "./Introduction";

export function App() {
  return (
    <div className="bg-white font-sans text-center pt-5 text-gray-900">
      <h1 className="text-9xl font-semibold">MENACE</h1>
      <p className="text-xl mb-6">
        Machine Educable Noughts And Crosses Engine
      </p>
      <p className="mb-6">
        One of the first & simplest computer to implement machine learning, Yes
        a physical computer made from matchboxes to beat YOU at tic-tac-toe!
      </p>
      <div className=" flex justify-center">
        <img
          className="border-8 shadow-2xl border-gray-300 rounded-2xl"
          src={MENACEImage}
          alt="Matthew Scroggs Menace"
          sizes=""
        />
      </div>
      <p className="mt-5 text-gray-600">
        Inspired and picture taken from{" "}
        <a href="https://www.mscroggs.co.uk/blog/94">Dr Matthew Scroggs blog</a>
      </p>
      <Introduction></Introduction>
    </div>
  );
}
