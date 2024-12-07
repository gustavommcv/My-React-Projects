/* eslint-disable react/prop-types */
import React from 'react';
import './Player.css';


function Player({name, symbol, isActive}) {
    const [isEditing, setIsEditing] = React.useState(false);

    function handleClick() {
        setIsEditing(current => !current);
    }

    return (
        <li className={isActive ? "player-li active" : "player-li"}>
            <span className="player">
            {!isEditing ? 
                <span className='player-name'>{name}</span>
                : 
                <input className='player-input' type="text" />
            }   

            
            <span className="player-symbol">{symbol}</span>
            </span>
            <button onClick={handleClick} className='button'>{!isEditing ? "Edit" : "Save"}</button>
        </li>
    );
}

export default Player;
