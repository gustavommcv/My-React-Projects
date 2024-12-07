/* eslint-disable react/prop-types */
import './GameOver.css';

function GameOver({ player, handleClick }) {
    return (
        <div className="game-over">
            <h3 className="game-over__title">Game Over!</h3>
            <p className="game-over__player">
                {player} won!
            </p>

            <button onClick={handleClick} className="game-over__button">Rematch!</button>
        </div>
    );
}

export default GameOver;
