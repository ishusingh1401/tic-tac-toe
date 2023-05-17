import "./TicTacToe.css";
export default function Block({value, handleBlock}) {
  return (
      <button className="square" onClick={handleBlock}>{value}</button>
  )
}
