import { log } from "../../../log";
import IconButton from "../../UI/IconButton";
import './Counter.scss';
import MinusIcon from '../../UI/Icons/MinusIcon';
import PlusIcon from '../../UI/Icons/PlusIcon';
import CounterOutput from "../CounterOutput/CounterOutput";

export default function Counter({ initialCount }) {
    log('<Counter /> rendered', 1);

    return (
        <div className="counter">
            <p className="counter__paragraph">
                The initial counter value was 3. It is a prime number.
            </p>

            <div className="counter__buttons">
                <IconButton icon={MinusIcon}>
                    Decrement
                </IconButton>

                <CounterOutput value={initialCount} />

                <IconButton icon={PlusIcon}>
                    Increment
                </IconButton>
            </div>
        </div>
    );
}
