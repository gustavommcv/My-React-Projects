import { useRef } from "react";
import { log } from "../../../log";
import './ConfigureCounter.scss';

export default function ConfigureCounter({ setCounter }) {
    log('<ConfigureCounter />', 1);

    const input = useRef();

    return (
        <div className="configure-counter">
            <p className="configure-counter__paragraph">Set Counter</p>
            <form action="" className="configure-counter__form">
                <input ref={input} type="number" className="configure-counter__input" />
                <button onClick={(e) => {e.preventDefault(); setCounter(input.current.value); input.current.value = 0}} className="configure-counter__button">Set</button>
            </form>
        </div>
    );
}
