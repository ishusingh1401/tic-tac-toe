import "./TicTacToe.css";
import Block from "./Block";
import { useState } from "react";
export default function Board() {
  const [isNextX, setNextX] = useState(true);
  const [blocks, setBlocks] = useState(Array(9).fill(null));
  function handleClick(i) {
    const nextBlocks = blocks.slice();
    if (isNextX) {
      if (blocks[i]) {
        return;
      }
      nextBlocks[i] = "X";
    } else {
      nextBlocks[i] = "0";
    }
    setBlocks(nextBlocks);
    setNextX(!isNextX);
  }
  return (
    <>
      <div className="board-row">
        <Block value={blocks[0]} handleBlock={() => handleClick(0)} />
        <Block value={blocks[1]} handleBlock={() => handleClick(1)} />
        <Block value={blocks[2]} handleBlock={() => handleClick(2)} />
      </div>

      <div className="board-row">
        <Block value={blocks[3]} handleBlock={() => handleClick(3)} />
        <Block value={blocks[4]} handleBlock={() => handleClick(4)} />
        <Block value={blocks[5]} handleBlock={() => handleClick(5)} />
      </div>

      <div className="board-row">
        <Block value={blocks[6]} handleBlock={() => handleClick(6)} />
        <Block value={blocks[7]} handleBlock={() => handleClick(7)} />
        <Block value={blocks[8]} handleBlock={() => handleClick(8)} />
      </div>
    </>
  );
}
