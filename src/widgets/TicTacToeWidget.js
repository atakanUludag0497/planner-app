import React, { useState } from 'react';

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(''));
  const [currentPlayer, setCurrentPlayer] = useState('X');
  const [winner, setWinner] = useState(null);

  const handleClick = (index) => {
    if (board[index] === '' && !winner) {
      const updatedBoard = [...board];
      updatedBoard[index] = currentPlayer;
      setBoard(updatedBoard);
      checkWinner(updatedBoard, currentPlayer);
      setCurrentPlayer(currentPlayer === 'X' ? 'O' : 'X');
    }
  };

  const checkWinner = (board, player) => {
    const winningCombos = [
      [0, 1, 2], [3, 4, 5], [6, 7, 8], // rows
      [0, 3, 6], [1, 4, 7], [2, 5, 8], // columns
      [0, 4, 8], [2, 4, 6] // diagonals
    ];

    for (let combo of winningCombos) {
      const [a, b, c] = combo;
      if (board[a] === player && board[b] === player && board[c] === player) {
        setWinner(player);
        break;
      }
    }

    if (!board.includes('') && !winner) {
      setWinner('draw');
    }
  };

  const resetGame = () => {
    setBoard(Array(9).fill(''));
    setCurrentPlayer('X');
    setWinner(null);
  };

  const renderCell = (index) => {
    return (
      <div
        className={`cell ${board[index]}`}
        onClick={() => handleClick(index)}
      >
        {board[index]}
      </div>
    );
  };

  return (
    <div className="tic-tac-toe">
      <div className="board">
        {board.map((cell, index) => (
          <React.Fragment key={index}>{renderCell(index)}</React.Fragment>
        ))}
      </div>
      <div className="status">
        {winner ? (
          <p>
            {winner === 'draw' ? "It's a draw!" : `Player ${winner} wins!`}
          </p>
        ) : (
          <p>Current player: {currentPlayer}</p>
        )}
        <button onClick={resetGame}>Reset</button>
      </div>
    </div>
  );
}