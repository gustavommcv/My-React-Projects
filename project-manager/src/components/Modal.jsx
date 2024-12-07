import { forwardRef } from "react";

const Modal = forwardRef(
    function Modal(_, ref) {

        function handleClick() {
            ref.current.close();
        }

        return(
            <dialog ref={ref} className="rounded-lg py-6 px-4 backdrop:backdrop-blur-sm backdrop:backdrop-brightness-50 shadow-2xl">
                <h2 className="font-bold text-xl text-stone-800 mb-2">Invalid Input</h2>
                <p className="mb-2 text-stone-500">Oops ... looks like you forgot to enter a value.</p>
                <p className="mb-4 text-stone-500">Please make sure you provide a valid value for every input field.</p>
                <div className="flex flex-row-reverse"><button className="border-transparent bg-stone-700 px-4 py-2 rounded-md text-stone-400 hover:bg-stone-600 hover:text-stone-100" onClick={handleClick}>Okay</button></div>
            </dialog>
        );
    }
);

export default Modal;
