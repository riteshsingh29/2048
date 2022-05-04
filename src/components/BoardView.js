import React, { useState } from "react";
import Cell from "./Cell";
import Tile from "./Tile";
import { Board } from "../helper";

const BoardView = () => {
  const [board, setBoard] = useState(new Board());
  const cells = board.cells.map((row, rowIndex) => {
    return (
      <div>
        {row.map((col, colIndex) => {
          return <Cell key={colIndex} />;
        })}
        ;
      </div>
    );
  });
  const tiles = board.tiles
    .filter((tile) => tile.value !== 0)
    .map((tile, index) => {
      return <Tile key={index} />;
    });

  return (
    <div>
      {cells}
      {tiles}
    </div>
  );
};

export default BoardView;
