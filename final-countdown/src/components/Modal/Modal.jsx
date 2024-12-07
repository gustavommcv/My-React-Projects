/* eslint-disable react/prop-types */
import React from "react";
import { createPortal } from "react-dom";

const Modal = React.forwardRef(function Modal({ targetTime, won, elapsedTime }, ref) {
    function handleClose() {
        ref.current.close();
    }

    return createPortal(
        <dialog ref={ref} className="backdrop:backdrop-blur-sm max-w-lg w-full py-8 px-10 rounded-xl bg-cyan-100 relative h-64 shadow-2xl">

            <h2 className="font-pixel text-5xl uppercase font-semibold tracking-tighter">{won ? `Your Score: ${(elapsedTime / 10).toFixed(0)}` : "You Lost"}</h2>
            <p className="tracking-wide mt-4 font-verdana">The target time was <span className="text-emerald-700 font-semibold">{targetTime} second{targetTime > 1 ? 's' : ''}.</span></p>
            <p className="tracking-wide mt-2 font-verdana">You stopped the timer with <span className="text-emerald-700 font-semibold">{won ? (targetTime - elapsedTime / 1000).toFixed(2) : (0).toFixed(2)} seconds left.</span></p>

            <button onClick={handleClose} className="px-4 py-2 bg-green-950 text-white mt-6 text-xl rounded absolute top-40 right-9">Close</button>
        </dialog>
        ,
        document.querySelector('.modal')
    );
})

export default Modal;
