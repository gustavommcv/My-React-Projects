import React from 'react';
import './App.css'
import GameBoard from './components/GameBoard/GameBoard'
import Player from './components/Player/Player'
import Log from './components/Log/Log';
import { WINNING_COMBINATIONS } from './winning-combinations';
import GameOver from './components/GameOver/GameOver';

const INITIAL_GAME_BOARD = [
  [null, null, null],
  [null, null, null],
  [null, null, null]
]

let winner = false;

function App() {

  const [gameBoard, setGameBoard] = React.useState(INITIAL_GAME_BOARD);
  const [currentPlayer, setCurrentPlayer] = React.useState('X');
  const [log, setLog] = React.useState([]);

  function restartGame() {
    setGameBoard(INITIAL_GAME_BOARD);
    setCurrentPlayer('X');
    setLog([]);
    winner = false;
  }

  function handleClick(row, column, symbol) {
    // alert(`Row: ${row}\nColumn: ${column}\nSymbol: ${symbol}`);
    setGameBoard(current => {
      const newBoard = current.map(innerArray => innerArray.slice());
      
      newBoard[row][column] = symbol;
      
      WINNING_COMBINATIONS.forEach(w => 
      {
        const test = w.map(wc => newBoard[wc.row][wc.column]);

        if (test.every(e => e === test[0] && e != null)) winner = true
      });
      
      return newBoard;
    });
    
    setLog(current => [
      { player: symbol, row, column },
      ...current
    ]);
    
    setCurrentPlayer(current => current === 'X' ? 'O' : 'X');
  }

  return (
    <>
      <main>
        <div id="game-container">
          <ol id="players">
            <Player name={'Player 1'} symbol={'X'} isActive={currentPlayer === 'X'} />
            <Player name={'Player 2'} symbol={'O'} isActive={currentPlayer === 'O'} />
          </ol>

          <GameBoard onClick={handleClick} board={gameBoard} currentPlayer={currentPlayer} />

          {winner && <GameOver handleClick={restartGame} player={currentPlayer === 'X' ? 'O' : 'X'} />}
        </div>

        <Log log={log} />
      </main>
    </>
  )
}

export default App
