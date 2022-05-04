import React from "react";
// import ReactDOM from "react-dom";
import { createRoot } from "react-dom/client";
import BoardView from "./components/BoardView";
import "./main.scss";
import "./styles.scss";

const App = () => {
  return <BoardView />;
};
const container = document.getElementById("root");
// ReactDOM.render(<App />, container);
const root = createRoot(container);

root.render(<App />);
