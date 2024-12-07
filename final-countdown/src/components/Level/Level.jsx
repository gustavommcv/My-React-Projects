/* eslint-disable react/prop-types */
import React from 'react';
import Modal from '../Modal/Modal.jsx';

function Level({ title, targetTime }) {
    const modal = React.useRef();
    const timeout = React.useRef();
    const counterRef = React.useRef();

    const [isActive, setIsActive] = React.useState(false);
    const [won, setWon] = React.useState(false);
    const [elapsedTime, setElapsedTime] = React.useState(0);

    function counter() {
        const start = performance.now();
        return function () {
            const now = performance.now();
            return now - start;
        };
    }

    function handleStart() {
        setIsActive(true);

        const c = counter();
        counterRef.current = c;
        timeout.current = setInterval(() => {
            const elapsed = c();
            console.log(elapsed.toFixed(0));

            if (elapsed >= targetTime * 1000) {
                handleStop();
            }
        }, 1);
    }

    function handleStop() {
        clearTimeout(timeout.current);

        if (counterRef.current) {
            const elapsed = counterRef.current();
            setElapsedTime(elapsed);

            setIsActive(false);
            if (elapsed >= targetTime * 1000) {
                handleLost(elapsed);
            } else {
                handleWin(elapsed);
            }
        }
    }

    function handleLost(elapsed) {
        setWon(false);
        setElapsedTime(elapsed);
        modal.current.showModal();
    }

    function handleWin(elapsed) {
        setWon(true);
        setElapsedTime(elapsed);
        modal.current.showModal();
    }

    return (
        <div className="bg-gradient-to-b from-teal-300 to-cyan-300 rounded-md w-80 flex flex-col items-center text-center p-7 shrink-0 gap-2 mb-8">
            <Modal ref={modal} targetTime={targetTime} elapsedTime={elapsedTime} won={won} />

            <h3 className="font-semibold uppercase text-2xl tracking-wider">{title}</h3>
            <p className="font-light border border-slate-400 px-2 rounded tracking-wide">{targetTime} second{targetTime > 1 ? 's' : ''}</p>

            <button
                onClick={isActive ? handleStop : handleStart}
                className="mt-6 px-3 py-2 bg-teal-950 text-zinc-100 text-xl rounded font-semibold">
                {isActive ? 'Stop' : 'Start'} Challenge
            </button>

            <p className="font-light mt-5 mb-3">{isActive ? 'Time is running' : 'Timer inactive'}</p>
        </div>
    );
}

export default Level;
