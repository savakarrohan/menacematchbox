import React from "react";
import { createRoot } from "react-dom/client";
import "./style/css/index.css";
import { App } from "./components/App";

const container = document.getElementById("root");
const root = createRoot(container!); // createRoot(container!) if you use TypeScript
root.render(
  <>
    <App></App>
  </>
);
