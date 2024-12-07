/* eslint-disable react/prop-types */
import './GameBoard.css';

function GameBoard({ board, onClick, currentPlayer }) {
    return (
        <ol id="game-board">
            {board.map((row, rowIndex) => {
                return row.map((col, colIndex) => {
                    return (
                        <button 
                            onClick={() => onClick(rowIndex, colIndex, currentPlayer)}
                            key={`${rowIndex}-${colIndex}`} 
                            className="field-button"
                            disabled={board[rowIndex][colIndex] != null}
                        >
                            {board[rowIndex][colIndex]}
                        </button>
                    )
                })
            })}
        </ol>
    )
}

export default GameBoard;
