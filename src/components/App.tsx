import React from "react";

import MENACEImage from "../style/images/01MatthewScroggsMenace.png";

export function App() {
  return (
    <div className="bg-black font-sans text-center pt-5 text-white">
      <h1 className="text-9xl font-semibold">MENACE</h1>
      <img src={MENACEImage} alt="" sizes="" />
    </div>
  );
}
